import PropTypes from 'prop-types'

function Index(props) {
    const {data} = props
    return (
        <div>
            {data.info}
        </div>
    )
}

Index.propTypes = {

}

export default Index

