"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityWhereUniqueInput_1 = require("../../../inputs/IssuePriorityWhereUniqueInput");
let FindUniqueIssuePriorityArgs = class FindUniqueIssuePriorityArgs {
};
exports.FindUniqueIssuePriorityArgs = FindUniqueIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], FindUniqueIssuePriorityArgs.prototype, "where", void 0);
exports.FindUniqueIssuePriorityArgs = FindUniqueIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueIssuePriorityArgs);
