const express = require("express");
const router = express.Router();
const subscriptionController = require("../controller/subscription.controller");

// Admin routes
router.get("/get-all-subscriptions", subscriptionController.getAllSubscriptions);
router.post("/subscription-by-user", subscriptionController.getSubscriptionByUser);

// User routes
router.post("/create-subscription", subscriptionController.postCreateSubscription);
router.post("/update-subscription", subscriptionController.postUpdateSubscription);
router.post("/delete-subscription", subscriptionController.postDeleteSubscription);

module.exports = router;
