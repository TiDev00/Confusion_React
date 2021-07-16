import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";


function RenderDish(dish) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div>

            </div>
        );
}

function RenderComments(comments) {
    if (comments == null) {
        return (<div>

        </div>)
    }

    const cmnts = comments.map(comment => {
        return (
            <card>
                <cardBody>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li>
                </cardBody>
            </card>
        )
    })

    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>

        </div>
    )
}

const DishDetail = (props) =>{
    const dishDetail = props.dish;

    if (dishDetail == null) {
        return (<div>

        </div>);
    }

    const dish = RenderDish(dishDetail)
    const comments = RenderComments(dishDetail.comments)

    return (
        <div className="container">
            <div className='row'>
                {dish}
                {comments}
            </div>
        </div>
    )
}

export default DishDetail;