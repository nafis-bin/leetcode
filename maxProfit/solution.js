class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0

        let lowestBought = prices[0]
        for (let i = 1; i < prices.length; i++) {
            let selling = prices[i]

            let currProfit = selling - lowestBought
            profit = Math.max(currProfit, profit)

            lowestBought = Math.min(lowestBought, prices[i])
        }

        return profit
    }
}

