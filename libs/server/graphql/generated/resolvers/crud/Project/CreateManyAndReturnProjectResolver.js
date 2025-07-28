"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnProjectArgs_1 = require("./args/CreateManyAndReturnProjectArgs");
const Project_1 = require("../../../models/Project");
const CreateManyAndReturnProject_1 = require("../../outputs/CreateManyAndReturnProject");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnProjectResolver = class CreateManyAndReturnProjectResolver {
    async createManyAndReturnProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnProjectResolver = CreateManyAndReturnProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnProject_1.CreateManyAndReturnProject], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnProjectArgs_1.CreateManyAndReturnProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnProjectResolver.prototype, "createManyAndReturnProject", null);
exports.CreateManyAndReturnProjectResolver = CreateManyAndReturnProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], CreateManyAndReturnProjectResolver);
