"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskMasterMetadata = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyAndReturnTaskMasterMetadata = class CreateManyAndReturnTaskMasterMetadata {
};
exports.CreateManyAndReturnTaskMasterMetadata = CreateManyAndReturnTaskMasterMetadata;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnTaskMasterMetadata.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTaskMasterMetadata.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTaskMasterMetadata.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTaskMasterMetadata.prototype, "description", void 0);
exports.CreateManyAndReturnTaskMasterMetadata = CreateManyAndReturnTaskMasterMetadata = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnTaskMasterMetadata", {})
], CreateManyAndReturnTaskMasterMetadata);
