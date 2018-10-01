//{}
//[]
import ReflectionModel from '../models/Reflection';

const Reflection = {
	//params obj req, obj res
	//returns obj reflection object
	create(req, res){
		if (!req.body.success && !req.body.lowPoint && !req.body.takeAway) {
			return res.status(400).send({'message': 'All fields are required'})
		}
		const reflection = ReflectionModel.create(req.body);
		return res.status(201).send(reflection);
	},

	//params req, res
	//returns object reflections array
	getAll(req, res){
		const reflections = ReflectionModel.findAll();
		return res.status(200).send(reflections);
	},

	//params req, res
	//returns obj reflection object
	getOne(req, res){
		const reflection = ReflectionModel.findOne(req.params.id);
		if (!reflection) {
			return res.status(404).send({'message':'reflection not found'});
		}
		return res.status(200).send(reflection);
	},

	//params req, res
	//returns obj updated reflection
	update(req, res){
		const reflection = ReflectionModel.findOne(req.prams.id);
		if (!reflection) {
			return res.status(404).send({'message': 'reflection not found'});
		}
		const updatedReflection = ReflectionModel.update(req.params.id, req.body);
		return res.status(200).send(updatedReflection);
	},

	//params req, res
	//returns void with status code 204
	delete(req, res){
		const reflection = ReflectionModel.findOne(req.params.id);
		if (!reflection) {
			return res.status(404).send({'message': 'reflection not found'});
		}
		const ref = ReflectionModel.delete(req.params.id);
		return res.status(204).send(ref);
	}
}

export default Reflection;