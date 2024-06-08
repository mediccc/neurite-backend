import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { MealDay } from "./meal-days.model";
import { Meal } from "src/meals/meals.model";

@Table({ tableName: 'mealDay_meals', createdAt: false, updatedAt: false})
export class MealDayMeals extends Model<MealDayMeals> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => MealDay)
    @Column({ type: DataType.INTEGER})
    mealDayId: number

    @ForeignKey(() => Meal)
    @Column({ type: DataType.INTEGER})
    mealId: number
}