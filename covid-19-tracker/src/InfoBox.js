import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>

                {/* Title */}
                <Typography color="textSecondary" className="infoBox__title">{title}</Typography>

                {/* Cases */}
                <h2 className="info__cases">{cases}</h2>

                {/* Total */}
                <Typography color="textSecondary" className="infoBox__total">{total} Total</Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
