CREATE TABLE "toDoList" (
			"id" SERIAL PRIMARY KEY,
			"description" VARCHAR (80) NOT NULL,
			"minutes" DECIMAL (5,2) NOT NULL,
			"done" BOOLEAN
);

INSERT INTO "toDoList" ("id","description", "minutes", "done")
VALUES ('Make Bed', 2, 'true'), ('Brush Teeth', 2 , 'true'), ( 'Practice French', 10, 'true'), ('Clean', 20, 'true'),('Make Austin Breakfast', 10,'true');