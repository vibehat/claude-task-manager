"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByLabelArgs_1 = require("./args/GroupByLabelArgs");
const Label_1 = require("../../../models/Label");
const LabelGroupBy_1 = require("../../outputs/LabelGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLabelResolver = class GroupByLabelResolver {
    async groupByLabel(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByLabelResolver = GroupByLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LabelGroupBy_1.LabelGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLabelArgs_1.GroupByLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByLabelResolver.prototype, "groupByLabel", null);
exports.GroupByLabelResolver = GroupByLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], GroupByLabelResolver);
