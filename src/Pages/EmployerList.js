import { useEffect, useState } from "react";
import { Card, CardContent, Grid, GridColumn, Icon } from "semantic-ui-react";
import EmployerService from "../Services/emloyerService";

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService
        employerService.getEmployerList().then(result => setEmployers(result.data.data))
    })

    return (
        <div>
            <Grid>
                {
                    employers.map(employer => (
                        <GridColumn width={4}>
                            <Card>
                                <CardContent header={employer.companyName} />
                                <CardContent description>
                                    <p>{employer.webAddress}</p>
                                    <p>{employer.email}</p>
                                    <p>{employer.phoneNumber}</p>
                                </CardContent>
                            </Card>
                        </GridColumn>
                    ))
                }
            </Grid>
        </div>
    )
}