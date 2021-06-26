import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { CreateTeamController } from "./controllers/CreateTeamController";
import { ListTeamsController } from "./controllers/ListTeamsController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const createTagController = new CreateTagController();
const createTeamController = new CreateTeamController();
const createComplimentController = new CreateComplimentController();

const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const listTeamsController = new ListTeamsController();


// Login e Create
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

// Admin routes
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/teams", ensureAuthenticated, ensureAdmin, createTeamController.handle);

// App routes
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle)
router.get("/users/compliments/send", ensureAuthenticated,listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated,listUserReceiveComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/teams", ensureAuthenticated, listTeamsController.handle);

export { router }