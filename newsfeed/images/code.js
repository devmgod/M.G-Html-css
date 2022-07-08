let getImpact = async(fromToken, toToken, ftAmount, ttAmount, inputData,liquidity0,liquidity1) => {
    try{
        const pairAddress = await factory.getPair(toToken, fromToken);
        if(pairAddress == "0x0000000000000000000000000000000000000000"){
            return {"impact": 0, "slippage": 0, "fromAmount":0, "toAmount": 0, "swapFrom": 0, "swapTo": 0, "liquidity0":0, "liquidity1":0, "fromDecimals":0, "toDecimals":0};
        }else{
          
            const minBNBLimit = plan.minBNBPool*(10**fromDecimals)
            if(liquidity0 < minBNBLimit){
                console.log("----", toToken, " Liquidity pool is too small");
                return {"impact": 0, "slippage": 0, "fromAmount":0, "toAmount": 0, "swapFrom": 0, "swapTo": 0, "liquidity0":0, "liquidity1":0, "fromDecimals":0, "toDecimals":0};
            }else{
                const product = liquidity0 * liquidity1;
                if(product == 0){
                    return {"impact": 0, "slippage": 0, "fromAmount":0, "toAmount": 0, "swapFrom": 0, "swapTo": 0, "liquidity0":0, "liquidity1":0, "fromDecimals":0, "toDecimals":0};
                }else{
                    let impact;
                    let fromAmount;
                    let toAmount;
                    let slippage;
                    if(checkRegEx([swapExactETHForTokens,swapExactTokensForTokens,swapExactTokensForTokensSupportingFeeOnTransferTokens,swapExactTokensForETH,swapExactTokensForETHSupportingFeeOnTransferTokens], inputData)){
                        let amountInExact = ftAmount;
                        let amountOutMin = ttAmount;
                        let _liquidity0 = liquidity0 - amountInExact;
                        let _liquidity1 = product / _liquidity0;
                        let amountOut = _liquidity1 - liquidity1;
                        if(amountOut < amountOutMin){
                            impact = 0;
                        }else{
                            let bPrice = _liquidity0/_liquidity1;
                            let price = amountInExact/amountOut;
                            impact = (price-bPrice)/bPrice*100;
                        }
                        slippage = (amountOut-amountOutMin)/amountOut*100;
                        fromAmount = amountInExact;
                        toAmount = amountOut;
                    }else if(checkRegEx([swapETHForExactTokens,swapTokensForExactTokens,swapTokensForExactETH], inputData)){
                        let amountInMax = ftAmount;
                        let amountOutExact = ttAmount;
                        let _liquidity1 = Number(liquidity1) + Number(amountOutExact);
                        let _liquidity0 = product / _liquidity1;
                        let amountIn = liquidity0 - _liquidity0;
                        if(amountIn > amountInMax){
                            impact = 0;
                        }else{
                            let bPrice = _liquidity0/_liquidity1;
                            let price = amountIn/amountOutExact;
                            impact = (price-bPrice)/bPrice*100;
                        }
                        slippage = (amountInMax-amountIn)/amountIn*100;
                        fromAmount = amountIn;
                        toAmount = amountOutExact;
                    }
                    let swapFrom;
                    if(plan.enableFixAmount == "enable"){
                        swapFrom = plan.fixedAmount;
                        swapFrom = ethers.utils.parseUnits(String(swapFrom), fromDecimals);
                    }else{
                        swapFrom = fromAmount*(slippage-0.01)/impact;
                        fromToken = fromToken.toLowerCase();
                        const tokenBalance = await getBalance(fromToken, plan.public);
                        const available = tokenBalance*(10**fromDecimals)
                        if(swapFrom > available){
                            swapFrom = available;
                        }
                    }
                    swapFrom = Math.floor(swapFrom);
                    let _liquidity0 = liquidity0 - swapFrom;
                    let _liquidity1 = product / _liquidity0;
                    let swapTo = _liquidity1 - liquidity1;
                    swapTo = Math.floor(swapTo);
                    return {"impact": impact, "slippage": slippage, "fromAmount":fromAmount, "toAmount": toAmount, "swapFrom": swapFrom, "swapTo": swapTo, "liquidity0":liquidity0, "liquidity1":liquidity1, "fromDecimals":fromDecimals, "toDecimals":toDecimals};
                }
            }           
        }
    }catch(e){
        console.log(e);
    }
}