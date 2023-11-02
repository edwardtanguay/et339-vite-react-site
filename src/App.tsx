import employees from "./data/employees.json";
import dayjs from "dayjs";
import * as config from "./config";
import cityscape from './images/cityscape.jpg';

function App() {
	const title = "Employee Directory";

	const introText =
		"Welcome to our Employee Directory, your one-stop destination for discovering and connecting with the talented individuals who make our organization thrive.";

	return (
		<>
			<h1 className="text-3xl mb-3">{title}</h1>
			<p>{introText}</p>
			<img src={cityscape}/>
			<div>
				{employees.map((employee) => (
					<div
						key={employee.employeeID}
						className="bg-slate-700 mt-3 p-3"
					>
						<div className="flex gap-3">
							<img
								className="w-36 rounded"
								src={`images/employees/employee_${employee.employeeID}.jpg`}
							/>
							<div>
								<h2 className="font-bold text-slate-300">
									{employee.firstName} {employee.lastName}
								</h2>
								<p className="italic text-yellow-200">
									{employee.title}
								</p>
								{config.accessGroup === 'administrators' && (
									<>
										<p className="text-red-400">
											{employee.address.phone}
										</p>
										<p className="text-red-400">
											{dayjs(employee.birthDate).format(
												"MMM DD, YYYY"
											)}
										</p>
									</>
								)}
							</div>
						</div>
						<p className="text-slate-200">{employee.notes}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
