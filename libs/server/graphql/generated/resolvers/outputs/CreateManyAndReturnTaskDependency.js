"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskDependency = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Task_1 = require("../../models/Task");
let CreateManyAndReturnTaskDependency = class CreateManyAndReturnTaskDependency {
};
exports.CreateManyAndReturnTaskDependency = CreateManyAndReturnTaskDependency;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnTaskDependency.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnTaskDependency.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnTaskDependency.prototype, "dependsOnId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTaskDependency.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Task_1.Task, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Task_1.Task)
], CreateManyAndReturnTaskDependency.prototype, "task", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Task_1.Task, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Task_1.Task)
], CreateManyAndReturnTaskDependency.prototype, "dependsOn", void 0);
exports.CreateManyAndReturnTaskDependency = CreateManyAndReturnTaskDependency = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnTaskDependency", {})
], CreateManyAndReturnTaskDependency);
