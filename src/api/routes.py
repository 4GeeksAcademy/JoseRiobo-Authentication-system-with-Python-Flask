"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/register", methods=["POST"])
def handle_register():
    data = request.get_json()

    if "email" not in data or "password" not in data:
        return jsonify({"error": "Missing required fields"}), 400
    
    new_user = User(email=data["email"], password=data["password"], is_active = True)

    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.serialize()), 201

@api.route("/login", methods=["POST"])
def handle_login():
    email= request.json.get("email", None)
    password= request.json.get("password", None)    

    user = User.query.filter_by(email = email, password=password).first()

    if user is None:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=str(user.id))
    return jsonify({"token" : access_token, "user_id": user.id})


@api.route("/privatearea", methods=["GET"])
@jwt_required()
def get_private_area():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user is None:
        return jsonify({ "msg": "User not found"}), 401
    
    return jsonify({
        "secret": "me encanta el cafe",
        "user" : user.serialize()
                    
        })