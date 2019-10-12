create database if not exists cookbook;

use cookbook;

drop table if exists book;
create table book (
	id INT NOT NULL PRIMARY KEY,
	name CHAR(50) NOT NULL,
	level CHAR(7),
	time VARCHAR(10),
	servings VARCHAR(50),
	ingredients TEXT NOT NULL,
	directions TEXT NOT NULL,
	source TEXT
	);

insert into book values (
	11,
	'Butternut Squash Alfredo Pasta',
	'Easy',
	'40 mins',
	'4 to 6',
	'3/4 cup heavy cream
	3 tablespoons unsalted butter, cut into small pieces
	1 pound butternut squash, cubed (about 4 cups total)
	1/2 teaspoon freshly grated nutmeg, plus more for serving
	Kosher salt
	1 pound fettuccine
	2 ounces freshly grated Parmesan (about 3/4 cup), plus more for serving ',
	'Add the cream, butter, squash and 3/4 cup water to a medium saucepan and bring to a boil. Reduce to a simmer and continue cooking until the squash is tender when poked with a fork, about 15 minutes. Puree using an immersion blender until super creamy and smooth, 3 to 5 minutes. Season with the nutmeg and 1 teaspoon salt.
	Meanwhile, bring a large pot of salted water to a boil. Add the pasta and cook until al dente according to the package directions. Reserve 1/2 cup starchy pasta water and drain the pasta. Stir the pasta and Parmesan into the squash sauce and toss until well coated. Add the reserved pasta water 1 tablespoon at a time if needed to loosen the sauce. Serve with more Parmesan and grated nutmeg, if desired.',
	'https://www.foodnetwork.com/recipes/food-network-kitchen/butternut-squash-alfredo-pasta-3757763'
	
	);