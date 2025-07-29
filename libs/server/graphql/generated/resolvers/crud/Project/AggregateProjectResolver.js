"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProjectArgs_1 = require("./args/AggregateProjectArgs");
const Project_1 = require("../../../models/Project");
const AggregateProject_1 = require("../../outputs/AggregateProject");
const helpers_1 = require("../../../helpers");
let AggregateProjectResolver = class AggregateProjectResolver {
    async aggregateProject(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateProjectResolver = AggregateProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProject_1.AggregateProject, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProjectArgs_1.AggregateProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProjectResolver.prototype, "aggregateProject", null);
exports.AggregateProjectResolver = AggregateProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], AggregateProjectResolver);
