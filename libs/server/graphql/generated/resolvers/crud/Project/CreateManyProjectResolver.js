"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyProjectArgs_1 = require("./args/CreateManyProjectArgs");
const Project_1 = require("../../../models/Project");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProjectResolver = class CreateManyProjectResolver {
    async createManyProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyProjectResolver = CreateManyProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProjectArgs_1.CreateManyProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyProjectResolver.prototype, "createManyProject", null);
exports.CreateManyProjectResolver = CreateManyProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], CreateManyProjectResolver);
