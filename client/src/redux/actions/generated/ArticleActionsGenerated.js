/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e718bb34ec9eb0ea62228de
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN ArticleActionsGenerated.js PLEASE EDIT ../ArticleActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ArticleApi from "../../../api/ArticleApi";

let actionsFunction = {

  //CRUD METHODS

  // Create article
  createArticle: function(article) {
    return function(dispatch) {
      return ArticleApi
        .createArticle(article)
        .then(article => {
          dispatch(actionsFunction.createArticleSuccess(article));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createArticleSuccess: function(article) {
    return { type: types.CREATE_ARTICLE_SUCCESS, payload: article };
  },


  // Delete article
  deleteArticle: function(id) {
    return function(dispatch) {
      return ArticleApi
        .deleteArticle(id)
        .then(article => {
          dispatch(actionsFunction.deleteArticleSuccess(article));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteArticleSuccess: function(article) {
    return { type: types.DELETE_ARTICLE_SUCCESS, payload: article };
  },


  // Get article
  loadArticle: function(id) {
    return function(dispatch) {
      return ArticleApi
        .getOneArticle(id)
        .then(article => {
          dispatch(actionsFunction.loadArticleSuccess(article));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadArticleSuccess: function(article) {
    return { type: types.GET_ARTICLE_SUCCESS, payload: article };
  },

  // Load  list
  loadArticleList: function() {
    return function(dispatch) {
      return ArticleApi
        .getArticleList()
        .then(list => {
          dispatch(actionsFunction.loadArticleListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadArticleListSuccess: function(list) {
    return { type: types.LIST_ARTICLE_SUCCESS, payload: list };
  },

	
  // Save article
  saveArticle: function(article) {
    return function(dispatch) {
      return ArticleApi
        .saveArticle(article)
        .then(article => {
          dispatch(actionsFunction.saveArticleSuccess(article));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveArticleSuccess: function(article) {
    return { type: types.UPDATE_ARTICLE_SUCCESS, payload: article };
  },


};

export default actionsFunction;
