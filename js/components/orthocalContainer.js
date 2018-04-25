import { connect } from 'react-redux'
import Orthocal from '../components/orthocal'
import {fetchDay} from '../actions'

const mapDispatchToProps = dispatch => ({
    fetchDay: day => dispatch(fetchDay(day))
});
const mapStateToProps = state => ({state})

const OrthocalContainer = connect(mapStateToProps, mapDispatchToProps)(Orthocal)

export default OrthocalContainer
