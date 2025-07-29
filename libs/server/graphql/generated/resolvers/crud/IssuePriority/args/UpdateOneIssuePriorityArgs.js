"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityUpdateInput_1 = require("../../../inputs/IssuePriorityUpdateInput");
const IssuePriorityWhereUniqueInput_1 = require("../../../inputs/IssuePriorityWhereUniqueInput");
let UpdateOneIssuePriorityArgs = class UpdateOneIssuePriorityArgs {
};
exports.UpdateOneIssuePriorityArgs = UpdateOneIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityUpdateInput_1.IssuePriorityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityUpdateInput_1.IssuePriorityUpdateInput)
], UpdateOneIssuePriorityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], UpdateOneIssuePriorityArgs.prototype, "where", void 0);
exports.UpdateOneIssuePriorityArgs = UpdateOneIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneIssuePriorityArgs);
