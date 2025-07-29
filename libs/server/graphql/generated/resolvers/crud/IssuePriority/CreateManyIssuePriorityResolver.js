"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyIssuePriorityArgs_1 = require("./args/CreateManyIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyIssuePriorityResolver = class CreateManyIssuePriorityResolver {
    async createManyIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyIssuePriorityResolver = CreateManyIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIssuePriorityArgs_1.CreateManyIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyIssuePriorityResolver.prototype, "createManyIssuePriority", null);
exports.CreateManyIssuePriorityResolver = CreateManyIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], CreateManyIssuePriorityResolver);
