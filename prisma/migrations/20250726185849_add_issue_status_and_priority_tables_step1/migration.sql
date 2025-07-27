-- CreateTable
CREATE TABLE "issue_statuses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "issue_priorities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_issues" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "identifier" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "statusId" TEXT,
    "priorityId" TEXT,
    "status" TEXT,
    "priority" TEXT,
    "rank" TEXT NOT NULL,
    "cycleId" TEXT,
    "dueDate" DATETIME,
    "taskId" INTEGER,
    "subtaskId" TEXT,
    "issueType" TEXT NOT NULL,
    "assigneeId" TEXT,
    "projectId" TEXT,
    "subissues" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "issues_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "issues_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "issues_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "cycles" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "issues_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "issues_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "issue_statuses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "issues_priorityId_fkey" FOREIGN KEY ("priorityId") REFERENCES "issue_priorities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_issues" ("assigneeId", "createdAt", "cycleId", "description", "dueDate", "id", "identifier", "issueType", "priority", "projectId", "rank", "status", "subissues", "subtaskId", "taskId", "title", "updatedAt") SELECT "assigneeId", "createdAt", "cycleId", "description", "dueDate", "id", "identifier", "issueType", "priority", "projectId", "rank", "status", "subissues", "subtaskId", "taskId", "title", "updatedAt" FROM "issues";
DROP TABLE "issues";
ALTER TABLE "new_issues" RENAME TO "issues";
CREATE UNIQUE INDEX "issues_identifier_key" ON "issues"("identifier");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
