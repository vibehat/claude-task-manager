"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnLabel = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyAndReturnLabel = class CreateManyAndReturnLabel {
};
exports.CreateManyAndReturnLabel = CreateManyAndReturnLabel;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnLabel.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnLabel.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnLabel.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnLabel.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnLabel.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnLabel.prototype, "updatedAt", void 0);
exports.CreateManyAndReturnLabel = CreateManyAndReturnLabel = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnLabel", {})
], CreateManyAndReturnLabel);
