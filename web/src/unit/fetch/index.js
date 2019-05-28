import { getNewsList, getNewsInfo, addNews, modifyNews, deleteNews, uploadNewsFile,getNewsByType,getNewsBySubType } from './news';
import { register, login, logout, getMyBriefInfo, forgetPassword, modifyPassword, resetPassword, verifyEmail, resendMailVerify, deleteSpider, findCrawlerById, modifyCrawler, addSpider, findAllCrawlers, updateModel } from './portal';
import { getQuestionsList, getQuestionInfo, addQuestion, modifyQuestion, deleteQuestion } from './question';
import { getAllAccount, changeStatus, checkAccount, getSelfInfo, modifySelfInfo, getPhoto, getAgencies } from './management';
import { getAllGrantedProject, importGrantedProject, importStatisticData, getGeneralStatistic, getDataMininglStatistic, viewGeneralChart, viewDataMiningGraph } from './dataController';
import { getAllService, addService, deleteService, getServiceInfo, addMessage, uploadRequestFile, uploadReplyFile, changeServiceStatus, getRequestFile, getReplyFile } from './service';
import { addMessageReply, deleteMessage, deleteReply } from './message';
import { getFileUrl, getFileWithToken } from './download';

export {
	getNewsList, getNewsInfo, addNews, modifyNews, deleteNews, uploadNewsFile, getNewsByType,getNewsBySubType,
	register, login, logout, getMyBriefInfo, forgetPassword, modifyPassword, resetPassword, verifyEmail, resendMailVerify, deleteSpider, findCrawlerById, modifyCrawler, addSpider, findAllCrawlers, updateModel,
	getQuestionsList, getQuestionInfo, addQuestion, modifyQuestion, deleteQuestion,
	getAllAccount, changeStatus, checkAccount, getSelfInfo, modifySelfInfo, getPhoto, getAgencies,
	getAllGrantedProject, importGrantedProject, importStatisticData, getGeneralStatistic, getDataMininglStatistic, viewGeneralChart, viewDataMiningGraph, 
	getAllService, addService, deleteService, getServiceInfo, addMessage, uploadRequestFile, uploadReplyFile, changeServiceStatus, getRequestFile, getReplyFile, 
	addMessageReply, deleteMessage, deleteReply,
	getFileUrl, getFileWithToken
};