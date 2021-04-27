const MenuList = [
	{
		title: "Home",
		key: "home",
		icon: "home",
		isPublic: true,
		path: "/admin/home",
	},
	{
		title: "Product",
		key: "products",
		icon: "appstore",
		children: [
			// 子菜单列表
			{
				title: "Category",
				key: "category",
				icon: "bars",
				path: "/admin/products/category",
			},
			{
				title: "Product Managment",
				key: "product",
				icon: "tool",
				path: "/admin/products/product",
			},
		],
	},

	{
		title: "User",
		key: "user",
		icon: "user",
		path: "/admin/user",
	},
	{
		title: "Role",
		key: "role",
		icon: "safety",
		path: "/admin/role",
	},

	{
		title: "Charts",
		key: "charts",
		icon: "area-chart",
		children: [
			{
				title: "Bar",
				key: "charts/bar",
				icon: "bar-chart",
				path: "/admin/charts/bar",
			},
			{
				title: "Line",
				key: "charts/line",
				icon: "line-chart",
				path: "/admin/charts/line",
			},
			{
				title: "Pie",
				key: "charts/pie",
				icon: "pie-chart",
				path: "/admin/charts/pie",
			},
		],
	},

	{
		title: "Order",
		key: "order",
		icon: "windows",
		path: "/admin/order",
	},
];

export default MenuList;
