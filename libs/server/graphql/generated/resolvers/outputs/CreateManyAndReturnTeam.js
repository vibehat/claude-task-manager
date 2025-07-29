"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTeam = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyAndReturnTeam = class CreateManyAndReturnTeam {
};
exports.CreateManyAndReturnTeam = CreateManyAndReturnTeam;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeam.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeam.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeam.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnTeam.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeam.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTeam.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTeam.prototype, "updatedAt", void 0);
exports.CreateManyAndReturnTeam = CreateManyAndReturnTeam = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnTeam", {})
], CreateManyAndReturnTeam);
