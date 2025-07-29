"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityUpdateManyMutationInput_1 = require("../../../inputs/IssuePriorityUpdateManyMutationInput");
const IssuePriorityWhereInput_1 = require("../../../inputs/IssuePriorityWhereInput");
let UpdateManyIssuePriorityArgs = class UpdateManyIssuePriorityArgs {
};
exports.UpdateManyIssuePriorityArgs = UpdateManyIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateManyMutationInput_1.IssuePriorityUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateManyMutationInput_1.IssuePriorityUpdateManyMutationInput)
], UpdateManyIssuePriorityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], UpdateManyIssuePriorityArgs.prototype, "where", void 0);
exports.UpdateManyIssuePriorityArgs = UpdateManyIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyIssuePriorityArgs);
