import { Router } from "express";
import {
    createEntertainment,
    deleteEntertainment,
    getEntertainments,
    patchEntertainments,
    searchEntertainments,
    updateEntertainments
} from "../../controllers/DigitalEntertainment/digitalEntertainmentController";
const router = Router();

router.get("/entertainments", getEntertainments);
router.get("/searchEntertainments/:title", searchEntertainments)
router.post("/createEntertainment", createEntertainment)
router.put("/updateEntertainment/:id", updateEntertainments)
router.patch("/patchEntertainment/:id", patchEntertainments)
router.delete("/deleteEntertainment/:id", deleteEntertainment)

export default router;
