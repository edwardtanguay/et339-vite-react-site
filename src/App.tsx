import employees from "./data/employees.json";

function App() {
	const title = "Employee Directory";

	const introText =
		"Welcome to our Employee Directory, your one-stop destination for discovering and connecting with the talented individuals who make our organization thrive.";

	return (
		<>
			<h1 className="text-3xl mb-3">{title}</h1>
			<p>{introText}</p>
			<div>
				{employees.map((employee) => (
					<div key={employee.employeeID} className="bg-slate-700 mt-3 p-3">
						<h2 className="font-bold">
							{employee.firstName} {employee.lastName}
						</h2>
						<p className="italic text-yellow-200">{employee.title}</p>
						<p className="text-slate-200">{employee.notes}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
