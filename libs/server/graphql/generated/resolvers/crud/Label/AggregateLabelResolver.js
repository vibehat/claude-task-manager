"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLabelArgs_1 = require("./args/AggregateLabelArgs");
const Label_1 = require("../../../models/Label");
const AggregateLabel_1 = require("../../outputs/AggregateLabel");
const helpers_1 = require("../../../helpers");
let AggregateLabelResolver = class AggregateLabelResolver {
    async aggregateLabel(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).label.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateLabelResolver = AggregateLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLabel_1.AggregateLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLabelArgs_1.AggregateLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateLabelResolver.prototype, "aggregateLabel", null);
exports.AggregateLabelResolver = AggregateLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], AggregateLabelResolver);
