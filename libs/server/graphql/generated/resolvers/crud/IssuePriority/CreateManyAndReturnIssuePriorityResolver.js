"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnIssuePriorityArgs_1 = require("./args/CreateManyAndReturnIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const CreateManyAndReturnIssuePriority_1 = require("../../outputs/CreateManyAndReturnIssuePriority");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnIssuePriorityResolver = class CreateManyAndReturnIssuePriorityResolver {
    async createManyAndReturnIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnIssuePriorityResolver = CreateManyAndReturnIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssuePriority_1.CreateManyAndReturnIssuePriority], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssuePriorityArgs_1.CreateManyAndReturnIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnIssuePriorityResolver.prototype, "createManyAndReturnIssuePriority", null);
exports.CreateManyAndReturnIssuePriorityResolver = CreateManyAndReturnIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], CreateManyAndReturnIssuePriorityResolver);
