import { ExpenseEntity } from "../../entities/expense.entity";

export interface ExpenseRepository {    
    create(expense: ExpenseEntity): Promise<boolean>;
}