"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var IssueScalarFieldEnum;
(function (IssueScalarFieldEnum) {
    IssueScalarFieldEnum["id"] = "id";
    IssueScalarFieldEnum["identifier"] = "identifier";
    IssueScalarFieldEnum["title"] = "title";
    IssueScalarFieldEnum["description"] = "description";
    IssueScalarFieldEnum["statusId"] = "statusId";
    IssueScalarFieldEnum["priorityId"] = "priorityId";
    IssueScalarFieldEnum["status"] = "status";
    IssueScalarFieldEnum["priority"] = "priority";
    IssueScalarFieldEnum["rank"] = "rank";
    IssueScalarFieldEnum["cycleId"] = "cycleId";
    IssueScalarFieldEnum["dueDate"] = "dueDate";
    IssueScalarFieldEnum["taskId"] = "taskId";
    IssueScalarFieldEnum["subtaskId"] = "subtaskId";
    IssueScalarFieldEnum["issueType"] = "issueType";
    IssueScalarFieldEnum["parentIssueId"] = "parentIssueId";
    IssueScalarFieldEnum["assigneeId"] = "assigneeId";
    IssueScalarFieldEnum["projectId"] = "projectId";
    IssueScalarFieldEnum["createdAt"] = "createdAt";
    IssueScalarFieldEnum["updatedAt"] = "updatedAt";
})(IssueScalarFieldEnum || (exports.IssueScalarFieldEnum = IssueScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(IssueScalarFieldEnum, {
    name: "IssueScalarFieldEnum",
    description: undefined,
});
