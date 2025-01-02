export interface ExpenseEntity {
    id: string;
    description: string;
    amount: number;
    date: Date;
    createdAt: Date;
    updatedAt?: Date;
}