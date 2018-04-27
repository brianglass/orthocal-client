import { connect } from 'react-redux'
import Orthocal from '../components/orthocal'
import {fetchDay, setJurisdiction} from '../actions'

const mapDispatchToProps = dispatch => ({
    fetchDay: day => dispatch(fetchDay(day)),
    setJurisdiction: jurisdiction => dispatch(setJurisdiction(jurisdiction))
});
const mapStateToProps = state => ({state})

const OrthocalContainer = connect(mapStateToProps, mapDispatchToProps)(Orthocal)

export default OrthocalContainer
