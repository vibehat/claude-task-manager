"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityWhereInput_1 = require("../../../inputs/IssuePriorityWhereInput");
let DeleteManyIssuePriorityArgs = class DeleteManyIssuePriorityArgs {
};
exports.DeleteManyIssuePriorityArgs = DeleteManyIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], DeleteManyIssuePriorityArgs.prototype, "where", void 0);
exports.DeleteManyIssuePriorityArgs = DeleteManyIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyIssuePriorityArgs);
