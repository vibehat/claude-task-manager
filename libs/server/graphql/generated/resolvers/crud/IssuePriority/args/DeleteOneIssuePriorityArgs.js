"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityWhereUniqueInput_1 = require("../../../inputs/IssuePriorityWhereUniqueInput");
let DeleteOneIssuePriorityArgs = class DeleteOneIssuePriorityArgs {
};
exports.DeleteOneIssuePriorityArgs = DeleteOneIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], DeleteOneIssuePriorityArgs.prototype, "where", void 0);
exports.DeleteOneIssuePriorityArgs = DeleteOneIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneIssuePriorityArgs);
