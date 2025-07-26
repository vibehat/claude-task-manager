-- CreateTable
CREATE TABLE "tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT,
    "testStrategy" TEXT,
    "priority" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "complexity" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "subtasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT,
    "testStrategy" TEXT,
    "status" TEXT NOT NULL,
    "parentId" INTEGER NOT NULL,
    "dependencies" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "subtasks_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "tasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "task_dependencies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskId" INTEGER NOT NULL,
    "dependsOnId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "task_dependencies_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "task_dependencies_dependsOnId_fkey" FOREIGN KEY ("dependsOnId") REFERENCES "tasks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "taskmaster_metadata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created" DATETIME NOT NULL,
    "updated" DATETIME NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "sync_operations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "data" TEXT NOT NULL,
    "rollbackData" TEXT,
    "metadata" TEXT,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "maxRetries" INTEGER NOT NULL DEFAULT 3,
    "error" TEXT,
    "taskIds" TEXT NOT NULL DEFAULT '[]'
);

-- CreateTable
CREATE TABLE "sync_conflicts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "operationType" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "uiVersion" TEXT NOT NULL,
    "cliVersion" TEXT NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolution" TEXT,
    "resolvedAt" DATETIME,
    "resolvedBy" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "task_dependencies_taskId_dependsOnId_key" ON "task_dependencies"("taskId", "dependsOnId");
