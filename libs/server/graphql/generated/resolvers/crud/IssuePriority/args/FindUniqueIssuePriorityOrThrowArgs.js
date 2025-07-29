"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssuePriorityOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityWhereUniqueInput_1 = require("../../../inputs/IssuePriorityWhereUniqueInput");
let FindUniqueIssuePriorityOrThrowArgs = class FindUniqueIssuePriorityOrThrowArgs {
};
exports.FindUniqueIssuePriorityOrThrowArgs = FindUniqueIssuePriorityOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], FindUniqueIssuePriorityOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueIssuePriorityOrThrowArgs = FindUniqueIssuePriorityOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIssuePriorityOrThrowArgs);
