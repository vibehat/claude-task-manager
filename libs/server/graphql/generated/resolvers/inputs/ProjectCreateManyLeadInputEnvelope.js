"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateManyLeadInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateManyLeadInput_1 = require("../inputs/ProjectCreateManyLeadInput");
let ProjectCreateManyLeadInputEnvelope = class ProjectCreateManyLeadInputEnvelope {
};
exports.ProjectCreateManyLeadInputEnvelope = ProjectCreateManyLeadInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateManyLeadInput_1.ProjectCreateManyLeadInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProjectCreateManyLeadInputEnvelope.prototype, "data", void 0);
exports.ProjectCreateManyLeadInputEnvelope = ProjectCreateManyLeadInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateManyLeadInputEnvelope", {})
], ProjectCreateManyLeadInputEnvelope);
