"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
exports.default = (sequelize) => {
    sequelize.define("User", {
        id: {
            primaryKey: true,
            type: core_1.DataTypes.INTEGER,
        },
        name: {
            type: core_1.DataTypes.STRING,
        },
    });
};
