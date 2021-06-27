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
import { CreateNoteTeamController } from "./controllers/CreateNoteTeamController";
import { ListNotesController } from "./controllers/ListNotesController";
import { ListUserSendNotesController} from "./controllers/ListUserSendNotesController";
import { ListUserReceiveNotesController } from "./controllers/ListUserReceiveNotesController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const createTagController = new CreateTagController();
const createTeamController = new CreateTeamController();
const createComplimentController = new CreateComplimentController();
const createNoteTeamController = new CreateNoteTeamController();

const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const listTeamsController = new ListTeamsController();
const listNotesController = new ListNotesController();

const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const lisUserSendNotesController = new ListUserSendNotesController();
const listUserReceiveNotesController = new ListUserReceiveNotesController();




// Login e Create
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

// Admin routes
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/teams", ensureAuthenticated, ensureAdmin, createTeamController.handle);

// App routes
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.post("/notes", ensureAuthenticated, createNoteTeamController.handle);

// Search All
router.get("/users", ensureAuthenticated, listUsersController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/teams", ensureAuthenticated, listTeamsController.handle);
router.get("/notes", ensureAuthenticated, listNotesController.handle);

// Search User
router.get("/user/compliments/send", ensureAuthenticated,listUserSendComplimentsController.handle)
router.get("/user/compliments/receive", ensureAuthenticated,listUserReceiveComplimentsController.handle)
router.get("/user/notes/send", ensureAuthenticated, lisUserSendNotesController.handle)
router.get("/user/notes/receive", ensureAuthenticated, listUserReceiveNotesController.handle)



export { router }