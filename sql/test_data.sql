-- Add initial users
insert into USER(USER_ID, USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL, VERSION) values (1, 'Test_User@epam.com', 'secure', 'Test', 'User', 'Test_User@epam.com', 0);
insert into USER(USER_ID, USERNAME, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL, VERSION) values (2, 'Test_User2@epam.com', 'secure2', 'Test2', 'User2', 'Test_User@epam.com', 0);

-- Add initial project(s)
insert into PROJECT(PROJECT_ID, NAME, VERSION) values (1, 'Fake project1', 0);
insert into PROJECT(PROJECT_ID, NAME, VERSION) values (2, 'Fake project2', 0);


-- Add initial feature(s)
insert into FEATURE(FEATURE_ID, PROJECT_ID, NAME, VERSION) values (1, 1, 'Fake feature', 0);
insert into FEATURE(FEATURE_ID, PROJECT_ID, NAME, VERSION) values (2, 2, 'Fake feature', 0);

-- Add initial role(s)
insert into ROLE(ROLE_ID, NAME, VERSION) values (1, 'USER_ADMIN', 0);

-- Add initial user project access
insert into PROJECT_USER_ACC(PROJECT_USER_ACC_ID, PROJECT_ID, USER_ID, ROLE_ID, VERSION) values (1, 1, 1, 1, 0);
insert into PROJECT_USER_ACC(PROJECT_USER_ACC_ID, PROJECT_ID, USER_ID, ROLE_ID, VERSION) values (2, 1, 2, 1, 0);
insert into PROJECT_USER_ACC(PROJECT_USER_ACC_ID, PROJECT_ID, USER_ID, ROLE_ID, VERSION) values (3, 2, 1, 1, 0);

--Add board templates
INSERT INTO BOARD_TEMPLATE(BOARD_TEMPLATE_ID, NAME, VERSION) VALUES (1, 'Two lines', 0);
INSERT INTO BOARD_TEMPLATE(BOARD_TEMPLATE_ID, NAME, VERSION) VALUES (2, 'Four lines', 0);

--Add template lanes
insert into TEMPLATE_LANE(LANE_ID, NAME, SEQUENCE_NUMBER, LIMIT, VERSION) values (1, 'Requested', 1, 10, 0);
insert into TEMPLATE_LANE(LANE_ID, NAME, SEQUENCE_NUMBER, LIMIT, VERSION) values (2, 'In Progress', 2, 10, 0);
insert into TEMPLATE_LANE(LANE_ID, NAME, SEQUENCE_NUMBER, LIMIT, VERSION) values (3, 'Test', 3, 10, 0);
insert into TEMPLATE_LANE(LANE_ID, NAME, SEQUENCE_NUMBER, LIMIT, VERSION) values (4, 'Done', 4, 10, 0);

-- Add template lanes to board templates

INSERT INTO TEMPLATE_LANE_BOARD_TEMPLATE (BOARD_TEMPLATE_ID, TEMPLATE_LANE_ID) VALUES (1,1);
INSERT INTO TEMPLATE_LANE_BOARD_TEMPLATE (BOARD_TEMPLATE_ID, TEMPLATE_LANE_ID) VALUES (1,4);

INSERT INTO TEMPLATE_LANE_BOARD_TEMPLATE (BOARD_TEMPLATE_ID, TEMPLATE_LANE_ID) VALUES (2,1);
INSERT INTO TEMPLATE_LANE_BOARD_TEMPLATE (BOARD_TEMPLATE_ID, TEMPLATE_LANE_ID) VALUES (2,2);
INSERT INTO TEMPLATE_LANE_BOARD_TEMPLATE (BOARD_TEMPLATE_ID, TEMPLATE_LANE_ID) VALUES (2,3);
INSERT INTO TEMPLATE_LANE_BOARD_TEMPLATE (BOARD_TEMPLATE_ID, TEMPLATE_LANE_ID) VALUES (2,4);

-- Add initial lanes
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (1, 'Requested', 1, null, 10, 1, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (2, 'In Progress', 2, null, 10, 1, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (3, 'Test', 3, null, 10, 1, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (4, 'Done', 4, null, 10, 1, 0);

insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (5, 'Sub2:In Progress', 1.8, 2, 6, 1, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (6, 'Sub2:Done', 1.9, 2, 10, 1, 0);

insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (7, 'Sub3:In Progress', 2.8, 3, 4, 1, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (8, 'Sub3:Done',2.9, 3, 10, 1, 0);


insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (9, 'Requested', 5, null, 10, 2, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (10, 'In Progress', 6, null, 10, 2, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (11, 'Test', 7, null, 10, 2, 0);
insert into LANE(LANE_ID, NAME, SEQUENCE_NUMBER, PARENT_LANE_ID, LIMIT, PROJECT_ID, VERSION) values (12, 'Done', 8, null, 10, 2, 0);


-- Add initial status
insert into STATUS(STATUS_ID, NAME, VERSION) values (1, 'ACTIVE', 0);
insert into STATUS(STATUS_ID, NAME, VERSION) values (2, 'CANCELLED', 0);
insert into STATUS(STATUS_ID, NAME, VERSION) values (3, 'FREEZED', 0);

-- Add initial priority
insert into PRIORITY(PRIORITY_ID, NAME, DESCRIPTION, VERSION) values (1, 'NORMAL', 'Normal', 0);
insert into PRIORITY(PRIORITY_ID, NAME, DESCRIPTION, VERSION) values (2, 'FEATURE', 'Block all Cards on Feature level', 0);
insert into PRIORITY(PRIORITY_ID, NAME, DESCRIPTION, VERSION) values (3, 'BOARD', 'Block all Cards on Board level', 0);

-- Add initial types
insert into TYPE(TYPE_ID, NAME, VERSION) values (1, 'Task', 0);
insert into TYPE(TYPE_ID, NAME, VERSION) values (2, 'Bug', 0);

-- Add initial cards
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (1, 'initail DB domain', 1, 1, 'design the db model', 1, 1, 1, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (2, 'Implement Add Card', 1, 1, 'Impelemnt Add Card', 1, 1, 1, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (3, 'Add server log', 1, 1, 'design the db model', 1, 1, 1, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (4, 'Test Bug1', 1, 5, 'This is a test bug description', 1, 1, 2, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (5, 'Test bug2', 1, 5, 'Description for test bug', 1, 1, 2, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (7, 'Test task 1', 1, 6, 'design the db model', 1, 1, 1, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (8, 'Test task 2', 1, 6, 'Impelemnt Add Card', 1, 1, 1, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (9, 'Test task 3', 1, 7, 'design the db model', 1, 1, 1, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (10, 'Test Bug3', 1, 8, 'This is a test bug description', 1, 1, 2, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (11, 'Test bug4', 1, 8, 'Description for test bug', 1, 1, 2, 1, 0, CURRENT_TIMESTAMP);
insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (12, 'Test bug5', 1, 8, 'Description for test bug', 1, 1, 2, 1, 0, CURRENT_TIMESTAMP);

insert into CARD(CARD_ID, TITLE, FEATURE_ID, LANE_ID, DESCRIPTION, AUTHOR_USER_ID, STATUS_ID, TYPE_ID, PRIORITY_ID, VERSION, START_DAT) values (13, 'initail DB domain', 1, 9, 'design the db model', 1, 1, 1, 1, 0, CURRENT_TIMESTAMP);


-- Add initial card history
insert into CARD_HISTORY(CARD_HISTORY_ID, CARD_ID, VERSION, DESCRIPTION, LAST_UPDATE_DAT, START_DAT, TITLE, ASSIGNEE_USER_ID, AUTHOR_USER_ID, FEATURE_ID, LANE_ID, STATUS_ID, TYPE_ID, PRIORITY_ID) values (1, 1, 0, 'First card', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CARD_1', 1, 1, 1, 1, 1, 1, 1);

