pragma solidity ^0.8.1;

contract ExpenseTracker{
    
    uint256 public totalExpense;
    uint256 public totalIncome;
    uint256 public totalBalance;
    
    function addIncome(uint256 _newIncome) public returns(uint256){
        
        totalIncome = totalIncome + _newIncome;
        return totalIncome;
    }
    
        
    function addExpense(uint256 _newExpense) public returns(uint256){
        
        totalExpense = totalExpense + _newExpense ;
        return totalExpense;
    }
    
    function calculateBalance() public returns(uint256){
        
        totalBalance = totalIncome - totalExpense;
        return totalBalance;
    }
    
    
    
}
