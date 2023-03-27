CREATE TABLE "todoList" (
			"id" SERIAL PRIMARY KEY,
			"description" VARCHAR (800) NOT NULL,
			"minutes" DECIMAL (50) NOT NULL,
			"done" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todoList" ("id","description", "minutes", "done")
VALUES ('Make Bed', 2, 'true'), ('Brush Teeth', 2 , 'true'), ( 'Practice French', 10, 'true'), ('Clean', 20, 'true'),('Make Austin Breakfast', 10,'false');