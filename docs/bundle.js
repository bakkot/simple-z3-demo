"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };

  // node_modules/z3-solver/build/wrapper.js
  var require_wrapper = __commonJS({
    "node_modules/z3-solver/build/wrapper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.init = exports.Z3_goal_prec = exports.Z3_error_code = exports.Z3_ast_print_mode = exports.Z3_param_kind = exports.Z3_decl_kind = exports.Z3_ast_kind = exports.Z3_sort_kind = exports.Z3_parameter_kind = exports.Z3_symbol_kind = exports.Z3_lbool = void 0;
      var Z3_lbool;
      (function(Z3_lbool2) {
        Z3_lbool2[Z3_lbool2["Z3_L_FALSE"] = -1] = "Z3_L_FALSE";
        Z3_lbool2[Z3_lbool2["Z3_L_UNDEF"] = 0] = "Z3_L_UNDEF";
        Z3_lbool2[Z3_lbool2["Z3_L_TRUE"] = 1] = "Z3_L_TRUE";
      })(Z3_lbool = exports.Z3_lbool || (exports.Z3_lbool = {}));
      var Z3_symbol_kind;
      (function(Z3_symbol_kind2) {
        Z3_symbol_kind2[Z3_symbol_kind2["Z3_INT_SYMBOL"] = 0] = "Z3_INT_SYMBOL";
        Z3_symbol_kind2[Z3_symbol_kind2["Z3_STRING_SYMBOL"] = 1] = "Z3_STRING_SYMBOL";
      })(Z3_symbol_kind = exports.Z3_symbol_kind || (exports.Z3_symbol_kind = {}));
      var Z3_parameter_kind;
      (function(Z3_parameter_kind2) {
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_INT"] = 0] = "Z3_PARAMETER_INT";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_DOUBLE"] = 1] = "Z3_PARAMETER_DOUBLE";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_RATIONAL"] = 2] = "Z3_PARAMETER_RATIONAL";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_SYMBOL"] = 3] = "Z3_PARAMETER_SYMBOL";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_SORT"] = 4] = "Z3_PARAMETER_SORT";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_AST"] = 5] = "Z3_PARAMETER_AST";
        Z3_parameter_kind2[Z3_parameter_kind2["Z3_PARAMETER_FUNC_DECL"] = 6] = "Z3_PARAMETER_FUNC_DECL";
      })(Z3_parameter_kind = exports.Z3_parameter_kind || (exports.Z3_parameter_kind = {}));
      var Z3_sort_kind;
      (function(Z3_sort_kind2) {
        Z3_sort_kind2[Z3_sort_kind2["Z3_UNINTERPRETED_SORT"] = 0] = "Z3_UNINTERPRETED_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_BOOL_SORT"] = 1] = "Z3_BOOL_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_INT_SORT"] = 2] = "Z3_INT_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_REAL_SORT"] = 3] = "Z3_REAL_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_BV_SORT"] = 4] = "Z3_BV_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_ARRAY_SORT"] = 5] = "Z3_ARRAY_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_DATATYPE_SORT"] = 6] = "Z3_DATATYPE_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_RELATION_SORT"] = 7] = "Z3_RELATION_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_FINITE_DOMAIN_SORT"] = 8] = "Z3_FINITE_DOMAIN_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_FLOATING_POINT_SORT"] = 9] = "Z3_FLOATING_POINT_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_ROUNDING_MODE_SORT"] = 10] = "Z3_ROUNDING_MODE_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_SEQ_SORT"] = 11] = "Z3_SEQ_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_RE_SORT"] = 12] = "Z3_RE_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_CHAR_SORT"] = 13] = "Z3_CHAR_SORT";
        Z3_sort_kind2[Z3_sort_kind2["Z3_UNKNOWN_SORT"] = 1e3] = "Z3_UNKNOWN_SORT";
      })(Z3_sort_kind = exports.Z3_sort_kind || (exports.Z3_sort_kind = {}));
      var Z3_ast_kind;
      (function(Z3_ast_kind2) {
        Z3_ast_kind2[Z3_ast_kind2["Z3_NUMERAL_AST"] = 0] = "Z3_NUMERAL_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_APP_AST"] = 1] = "Z3_APP_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_VAR_AST"] = 2] = "Z3_VAR_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_QUANTIFIER_AST"] = 3] = "Z3_QUANTIFIER_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_SORT_AST"] = 4] = "Z3_SORT_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_FUNC_DECL_AST"] = 5] = "Z3_FUNC_DECL_AST";
        Z3_ast_kind2[Z3_ast_kind2["Z3_UNKNOWN_AST"] = 1e3] = "Z3_UNKNOWN_AST";
      })(Z3_ast_kind = exports.Z3_ast_kind || (exports.Z3_ast_kind = {}));
      var Z3_decl_kind;
      (function(Z3_decl_kind2) {
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TRUE"] = 256] = "Z3_OP_TRUE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FALSE"] = 257] = "Z3_OP_FALSE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EQ"] = 258] = "Z3_OP_EQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DISTINCT"] = 259] = "Z3_OP_DISTINCT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ITE"] = 260] = "Z3_OP_ITE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AND"] = 261] = "Z3_OP_AND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_OR"] = 262] = "Z3_OP_OR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IFF"] = 263] = "Z3_OP_IFF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_XOR"] = 264] = "Z3_OP_XOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_NOT"] = 265] = "Z3_OP_NOT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IMPLIES"] = 266] = "Z3_OP_IMPLIES";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_OEQ"] = 267] = "Z3_OP_OEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ANUM"] = 512] = "Z3_OP_ANUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AGNUM"] = 513] = "Z3_OP_AGNUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LE"] = 514] = "Z3_OP_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_GE"] = 515] = "Z3_OP_GE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LT"] = 516] = "Z3_OP_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_GT"] = 517] = "Z3_OP_GT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ADD"] = 518] = "Z3_OP_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SUB"] = 519] = "Z3_OP_SUB";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UMINUS"] = 520] = "Z3_OP_UMINUS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_MUL"] = 521] = "Z3_OP_MUL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DIV"] = 522] = "Z3_OP_DIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IDIV"] = 523] = "Z3_OP_IDIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_REM"] = 524] = "Z3_OP_REM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_MOD"] = 525] = "Z3_OP_MOD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TO_REAL"] = 526] = "Z3_OP_TO_REAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_TO_INT"] = 527] = "Z3_OP_TO_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_IS_INT"] = 528] = "Z3_OP_IS_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_POWER"] = 529] = "Z3_OP_POWER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STORE"] = 768] = "Z3_OP_STORE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SELECT"] = 769] = "Z3_OP_SELECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CONST_ARRAY"] = 770] = "Z3_OP_CONST_ARRAY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_MAP"] = 771] = "Z3_OP_ARRAY_MAP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_DEFAULT"] = 772] = "Z3_OP_ARRAY_DEFAULT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_UNION"] = 773] = "Z3_OP_SET_UNION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_INTERSECT"] = 774] = "Z3_OP_SET_INTERSECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_DIFFERENCE"] = 775] = "Z3_OP_SET_DIFFERENCE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_COMPLEMENT"] = 776] = "Z3_OP_SET_COMPLEMENT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_SUBSET"] = 777] = "Z3_OP_SET_SUBSET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_AS_ARRAY"] = 778] = "Z3_OP_AS_ARRAY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ARRAY_EXT"] = 779] = "Z3_OP_ARRAY_EXT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_HAS_SIZE"] = 780] = "Z3_OP_SET_HAS_SIZE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SET_CARD"] = 781] = "Z3_OP_SET_CARD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNUM"] = 1024] = "Z3_OP_BNUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT1"] = 1025] = "Z3_OP_BIT1";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT0"] = 1026] = "Z3_OP_BIT0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNEG"] = 1027] = "Z3_OP_BNEG";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BADD"] = 1028] = "Z3_OP_BADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSUB"] = 1029] = "Z3_OP_BSUB";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BMUL"] = 1030] = "Z3_OP_BMUL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV"] = 1031] = "Z3_OP_BSDIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV"] = 1032] = "Z3_OP_BUDIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM"] = 1033] = "Z3_OP_BSREM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM"] = 1034] = "Z3_OP_BUREM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD"] = 1035] = "Z3_OP_BSMOD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV0"] = 1036] = "Z3_OP_BSDIV0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV0"] = 1037] = "Z3_OP_BUDIV0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM0"] = 1038] = "Z3_OP_BSREM0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM0"] = 1039] = "Z3_OP_BUREM0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD0"] = 1040] = "Z3_OP_BSMOD0";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ULEQ"] = 1041] = "Z3_OP_ULEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SLEQ"] = 1042] = "Z3_OP_SLEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UGEQ"] = 1043] = "Z3_OP_UGEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SGEQ"] = 1044] = "Z3_OP_SGEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ULT"] = 1045] = "Z3_OP_ULT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SLT"] = 1046] = "Z3_OP_SLT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UGT"] = 1047] = "Z3_OP_UGT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SGT"] = 1048] = "Z3_OP_SGT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BAND"] = 1049] = "Z3_OP_BAND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BOR"] = 1050] = "Z3_OP_BOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNOT"] = 1051] = "Z3_OP_BNOT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BXOR"] = 1052] = "Z3_OP_BXOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNAND"] = 1053] = "Z3_OP_BNAND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BNOR"] = 1054] = "Z3_OP_BNOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BXNOR"] = 1055] = "Z3_OP_BXNOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CONCAT"] = 1056] = "Z3_OP_CONCAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SIGN_EXT"] = 1057] = "Z3_OP_SIGN_EXT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ZERO_EXT"] = 1058] = "Z3_OP_ZERO_EXT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXTRACT"] = 1059] = "Z3_OP_EXTRACT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_REPEAT"] = 1060] = "Z3_OP_REPEAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BREDOR"] = 1061] = "Z3_OP_BREDOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BREDAND"] = 1062] = "Z3_OP_BREDAND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BCOMP"] = 1063] = "Z3_OP_BCOMP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSHL"] = 1064] = "Z3_OP_BSHL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BLSHR"] = 1065] = "Z3_OP_BLSHR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BASHR"] = 1066] = "Z3_OP_BASHR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ROTATE_LEFT"] = 1067] = "Z3_OP_ROTATE_LEFT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_ROTATE_RIGHT"] = 1068] = "Z3_OP_ROTATE_RIGHT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXT_ROTATE_LEFT"] = 1069] = "Z3_OP_EXT_ROTATE_LEFT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_EXT_ROTATE_RIGHT"] = 1070] = "Z3_OP_EXT_ROTATE_RIGHT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BIT2BOOL"] = 1071] = "Z3_OP_BIT2BOOL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INT2BV"] = 1072] = "Z3_OP_INT2BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BV2INT"] = 1073] = "Z3_OP_BV2INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CARRY"] = 1074] = "Z3_OP_CARRY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_XOR3"] = 1075] = "Z3_OP_XOR3";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMUL_NO_OVFL"] = 1076] = "Z3_OP_BSMUL_NO_OVFL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUMUL_NO_OVFL"] = 1077] = "Z3_OP_BUMUL_NO_OVFL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMUL_NO_UDFL"] = 1078] = "Z3_OP_BSMUL_NO_UDFL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSDIV_I"] = 1079] = "Z3_OP_BSDIV_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUDIV_I"] = 1080] = "Z3_OP_BUDIV_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSREM_I"] = 1081] = "Z3_OP_BSREM_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BUREM_I"] = 1082] = "Z3_OP_BUREM_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_BSMOD_I"] = 1083] = "Z3_OP_BSMOD_I";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_UNDEF"] = 1280] = "Z3_OP_PR_UNDEF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRUE"] = 1281] = "Z3_OP_PR_TRUE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ASSERTED"] = 1282] = "Z3_OP_PR_ASSERTED";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_GOAL"] = 1283] = "Z3_OP_PR_GOAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MODUS_PONENS"] = 1284] = "Z3_OP_PR_MODUS_PONENS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REFLEXIVITY"] = 1285] = "Z3_OP_PR_REFLEXIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_SYMMETRY"] = 1286] = "Z3_OP_PR_SYMMETRY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRANSITIVITY"] = 1287] = "Z3_OP_PR_TRANSITIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TRANSITIVITY_STAR"] = 1288] = "Z3_OP_PR_TRANSITIVITY_STAR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MONOTONICITY"] = 1289] = "Z3_OP_PR_MONOTONICITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_QUANT_INTRO"] = 1290] = "Z3_OP_PR_QUANT_INTRO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_BIND"] = 1291] = "Z3_OP_PR_BIND";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DISTRIBUTIVITY"] = 1292] = "Z3_OP_PR_DISTRIBUTIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_AND_ELIM"] = 1293] = "Z3_OP_PR_AND_ELIM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NOT_OR_ELIM"] = 1294] = "Z3_OP_PR_NOT_OR_ELIM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REWRITE"] = 1295] = "Z3_OP_PR_REWRITE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REWRITE_STAR"] = 1296] = "Z3_OP_PR_REWRITE_STAR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_PULL_QUANT"] = 1297] = "Z3_OP_PR_PULL_QUANT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_PUSH_QUANT"] = 1298] = "Z3_OP_PR_PUSH_QUANT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ELIM_UNUSED_VARS"] = 1299] = "Z3_OP_PR_ELIM_UNUSED_VARS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DER"] = 1300] = "Z3_OP_PR_DER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_QUANT_INST"] = 1301] = "Z3_OP_PR_QUANT_INST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_HYPOTHESIS"] = 1302] = "Z3_OP_PR_HYPOTHESIS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_LEMMA"] = 1303] = "Z3_OP_PR_LEMMA";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_UNIT_RESOLUTION"] = 1304] = "Z3_OP_PR_UNIT_RESOLUTION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_TRUE"] = 1305] = "Z3_OP_PR_IFF_TRUE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_FALSE"] = 1306] = "Z3_OP_PR_IFF_FALSE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_COMMUTATIVITY"] = 1307] = "Z3_OP_PR_COMMUTATIVITY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DEF_AXIOM"] = 1308] = "Z3_OP_PR_DEF_AXIOM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_ASSUMPTION_ADD"] = 1309] = "Z3_OP_PR_ASSUMPTION_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_LEMMA_ADD"] = 1310] = "Z3_OP_PR_LEMMA_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_REDUNDANT_DEL"] = 1311] = "Z3_OP_PR_REDUNDANT_DEL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_CLAUSE_TRAIL"] = 1312] = "Z3_OP_PR_CLAUSE_TRAIL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_DEF_INTRO"] = 1313] = "Z3_OP_PR_DEF_INTRO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_APPLY_DEF"] = 1314] = "Z3_OP_PR_APPLY_DEF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_IFF_OEQ"] = 1315] = "Z3_OP_PR_IFF_OEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NNF_POS"] = 1316] = "Z3_OP_PR_NNF_POS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_NNF_NEG"] = 1317] = "Z3_OP_PR_NNF_NEG";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_SKOLEMIZE"] = 1318] = "Z3_OP_PR_SKOLEMIZE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_MODUS_PONENS_OEQ"] = 1319] = "Z3_OP_PR_MODUS_PONENS_OEQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_TH_LEMMA"] = 1320] = "Z3_OP_PR_TH_LEMMA";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PR_HYPER_RESOLVE"] = 1321] = "Z3_OP_PR_HYPER_RESOLVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_STORE"] = 1536] = "Z3_OP_RA_STORE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_EMPTY"] = 1537] = "Z3_OP_RA_EMPTY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_IS_EMPTY"] = 1538] = "Z3_OP_RA_IS_EMPTY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_JOIN"] = 1539] = "Z3_OP_RA_JOIN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_UNION"] = 1540] = "Z3_OP_RA_UNION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_WIDEN"] = 1541] = "Z3_OP_RA_WIDEN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_PROJECT"] = 1542] = "Z3_OP_RA_PROJECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_FILTER"] = 1543] = "Z3_OP_RA_FILTER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_NEGATION_FILTER"] = 1544] = "Z3_OP_RA_NEGATION_FILTER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_RENAME"] = 1545] = "Z3_OP_RA_RENAME";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_COMPLEMENT"] = 1546] = "Z3_OP_RA_COMPLEMENT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_SELECT"] = 1547] = "Z3_OP_RA_SELECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RA_CLONE"] = 1548] = "Z3_OP_RA_CLONE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FD_CONSTANT"] = 1549] = "Z3_OP_FD_CONSTANT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FD_LT"] = 1550] = "Z3_OP_FD_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_UNIT"] = 1551] = "Z3_OP_SEQ_UNIT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_EMPTY"] = 1552] = "Z3_OP_SEQ_EMPTY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_CONCAT"] = 1553] = "Z3_OP_SEQ_CONCAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_PREFIX"] = 1554] = "Z3_OP_SEQ_PREFIX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_SUFFIX"] = 1555] = "Z3_OP_SEQ_SUFFIX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_CONTAINS"] = 1556] = "Z3_OP_SEQ_CONTAINS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_EXTRACT"] = 1557] = "Z3_OP_SEQ_EXTRACT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE"] = 1558] = "Z3_OP_SEQ_REPLACE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_RE"] = 1559] = "Z3_OP_SEQ_REPLACE_RE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_RE_ALL"] = 1560] = "Z3_OP_SEQ_REPLACE_RE_ALL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_REPLACE_ALL"] = 1561] = "Z3_OP_SEQ_REPLACE_ALL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_AT"] = 1562] = "Z3_OP_SEQ_AT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_NTH"] = 1563] = "Z3_OP_SEQ_NTH";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_LENGTH"] = 1564] = "Z3_OP_SEQ_LENGTH";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_INDEX"] = 1565] = "Z3_OP_SEQ_INDEX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_LAST_INDEX"] = 1566] = "Z3_OP_SEQ_LAST_INDEX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_TO_RE"] = 1567] = "Z3_OP_SEQ_TO_RE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SEQ_IN_RE"] = 1568] = "Z3_OP_SEQ_IN_RE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_TO_INT"] = 1569] = "Z3_OP_STR_TO_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INT_TO_STR"] = 1570] = "Z3_OP_INT_TO_STR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UBV_TO_STR"] = 1571] = "Z3_OP_UBV_TO_STR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SBV_TO_STR"] = 1572] = "Z3_OP_SBV_TO_STR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_TO_CODE"] = 1573] = "Z3_OP_STR_TO_CODE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STR_FROM_CODE"] = 1574] = "Z3_OP_STR_FROM_CODE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STRING_LT"] = 1575] = "Z3_OP_STRING_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_STRING_LE"] = 1576] = "Z3_OP_STRING_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_PLUS"] = 1577] = "Z3_OP_RE_PLUS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_STAR"] = 1578] = "Z3_OP_RE_STAR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_OPTION"] = 1579] = "Z3_OP_RE_OPTION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_CONCAT"] = 1580] = "Z3_OP_RE_CONCAT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_UNION"] = 1581] = "Z3_OP_RE_UNION";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_RANGE"] = 1582] = "Z3_OP_RE_RANGE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_DIFF"] = 1583] = "Z3_OP_RE_DIFF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_INTERSECT"] = 1584] = "Z3_OP_RE_INTERSECT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_LOOP"] = 1585] = "Z3_OP_RE_LOOP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_POWER"] = 1586] = "Z3_OP_RE_POWER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_COMPLEMENT"] = 1587] = "Z3_OP_RE_COMPLEMENT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_EMPTY_SET"] = 1588] = "Z3_OP_RE_EMPTY_SET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_FULL_SET"] = 1589] = "Z3_OP_RE_FULL_SET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_FULL_CHAR_SET"] = 1590] = "Z3_OP_RE_FULL_CHAR_SET";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_OF_PRED"] = 1591] = "Z3_OP_RE_OF_PRED";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_REVERSE"] = 1592] = "Z3_OP_RE_REVERSE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RE_DERIVATIVE"] = 1593] = "Z3_OP_RE_DERIVATIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_CONST"] = 1594] = "Z3_OP_CHAR_CONST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_LE"] = 1595] = "Z3_OP_CHAR_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_TO_INT"] = 1596] = "Z3_OP_CHAR_TO_INT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_TO_BV"] = 1597] = "Z3_OP_CHAR_TO_BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_FROM_BV"] = 1598] = "Z3_OP_CHAR_FROM_BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_CHAR_IS_DIGIT"] = 1599] = "Z3_OP_CHAR_IS_DIGIT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LABEL"] = 1792] = "Z3_OP_LABEL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_LABEL_LIT"] = 1793] = "Z3_OP_LABEL_LIT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_CONSTRUCTOR"] = 2048] = "Z3_OP_DT_CONSTRUCTOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_RECOGNISER"] = 2049] = "Z3_OP_DT_RECOGNISER";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_IS"] = 2050] = "Z3_OP_DT_IS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_ACCESSOR"] = 2051] = "Z3_OP_DT_ACCESSOR";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_DT_UPDATE_FIELD"] = 2052] = "Z3_OP_DT_UPDATE_FIELD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_AT_MOST"] = 2304] = "Z3_OP_PB_AT_MOST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_AT_LEAST"] = 2305] = "Z3_OP_PB_AT_LEAST";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_LE"] = 2306] = "Z3_OP_PB_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_GE"] = 2307] = "Z3_OP_PB_GE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_PB_EQ"] = 2308] = "Z3_OP_PB_EQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_LO"] = 40960] = "Z3_OP_SPECIAL_RELATION_LO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_PO"] = 40961] = "Z3_OP_SPECIAL_RELATION_PO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_PLO"] = 40962] = "Z3_OP_SPECIAL_RELATION_PLO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TO"] = 40963] = "Z3_OP_SPECIAL_RELATION_TO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TC"] = 40964] = "Z3_OP_SPECIAL_RELATION_TC";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_SPECIAL_RELATION_TRC"] = 40965] = "Z3_OP_SPECIAL_RELATION_TRC";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN"] = 45056] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY"] = 45057] = "Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_POSITIVE"] = 45058] = "Z3_OP_FPA_RM_TOWARD_POSITIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_NEGATIVE"] = 45059] = "Z3_OP_FPA_RM_TOWARD_NEGATIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_RM_TOWARD_ZERO"] = 45060] = "Z3_OP_FPA_RM_TOWARD_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NUM"] = 45061] = "Z3_OP_FPA_NUM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_PLUS_INF"] = 45062] = "Z3_OP_FPA_PLUS_INF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MINUS_INF"] = 45063] = "Z3_OP_FPA_MINUS_INF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NAN"] = 45064] = "Z3_OP_FPA_NAN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_PLUS_ZERO"] = 45065] = "Z3_OP_FPA_PLUS_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MINUS_ZERO"] = 45066] = "Z3_OP_FPA_MINUS_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ADD"] = 45067] = "Z3_OP_FPA_ADD";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_SUB"] = 45068] = "Z3_OP_FPA_SUB";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_NEG"] = 45069] = "Z3_OP_FPA_NEG";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MUL"] = 45070] = "Z3_OP_FPA_MUL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_DIV"] = 45071] = "Z3_OP_FPA_DIV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_REM"] = 45072] = "Z3_OP_FPA_REM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ABS"] = 45073] = "Z3_OP_FPA_ABS";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MIN"] = 45074] = "Z3_OP_FPA_MIN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_MAX"] = 45075] = "Z3_OP_FPA_MAX";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_FMA"] = 45076] = "Z3_OP_FPA_FMA";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_SQRT"] = 45077] = "Z3_OP_FPA_SQRT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_ROUND_TO_INTEGRAL"] = 45078] = "Z3_OP_FPA_ROUND_TO_INTEGRAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_EQ"] = 45079] = "Z3_OP_FPA_EQ";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_LT"] = 45080] = "Z3_OP_FPA_LT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_GT"] = 45081] = "Z3_OP_FPA_GT";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_LE"] = 45082] = "Z3_OP_FPA_LE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_GE"] = 45083] = "Z3_OP_FPA_GE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NAN"] = 45084] = "Z3_OP_FPA_IS_NAN";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_INF"] = 45085] = "Z3_OP_FPA_IS_INF";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_ZERO"] = 45086] = "Z3_OP_FPA_IS_ZERO";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NORMAL"] = 45087] = "Z3_OP_FPA_IS_NORMAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_SUBNORMAL"] = 45088] = "Z3_OP_FPA_IS_SUBNORMAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_NEGATIVE"] = 45089] = "Z3_OP_FPA_IS_NEGATIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_IS_POSITIVE"] = 45090] = "Z3_OP_FPA_IS_POSITIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_FP"] = 45091] = "Z3_OP_FPA_FP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_FP"] = 45092] = "Z3_OP_FPA_TO_FP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_FP_UNSIGNED"] = 45093] = "Z3_OP_FPA_TO_FP_UNSIGNED";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_UBV"] = 45094] = "Z3_OP_FPA_TO_UBV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_SBV"] = 45095] = "Z3_OP_FPA_TO_SBV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_REAL"] = 45096] = "Z3_OP_FPA_TO_REAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_TO_IEEE_BV"] = 45097] = "Z3_OP_FPA_TO_IEEE_BV";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_BVWRAP"] = 45098] = "Z3_OP_FPA_BVWRAP";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_FPA_BV2RM"] = 45099] = "Z3_OP_FPA_BV2RM";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_INTERNAL"] = 45100] = "Z3_OP_INTERNAL";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_RECURSIVE"] = 45101] = "Z3_OP_RECURSIVE";
        Z3_decl_kind2[Z3_decl_kind2["Z3_OP_UNINTERPRETED"] = 45102] = "Z3_OP_UNINTERPRETED";
      })(Z3_decl_kind = exports.Z3_decl_kind || (exports.Z3_decl_kind = {}));
      var Z3_param_kind;
      (function(Z3_param_kind2) {
        Z3_param_kind2[Z3_param_kind2["Z3_PK_UINT"] = 0] = "Z3_PK_UINT";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_BOOL"] = 1] = "Z3_PK_BOOL";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_DOUBLE"] = 2] = "Z3_PK_DOUBLE";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_SYMBOL"] = 3] = "Z3_PK_SYMBOL";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_STRING"] = 4] = "Z3_PK_STRING";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_OTHER"] = 5] = "Z3_PK_OTHER";
        Z3_param_kind2[Z3_param_kind2["Z3_PK_INVALID"] = 6] = "Z3_PK_INVALID";
      })(Z3_param_kind = exports.Z3_param_kind || (exports.Z3_param_kind = {}));
      var Z3_ast_print_mode;
      (function(Z3_ast_print_mode2) {
        Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_SMTLIB_FULL"] = 0] = "Z3_PRINT_SMTLIB_FULL";
        Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_LOW_LEVEL"] = 1] = "Z3_PRINT_LOW_LEVEL";
        Z3_ast_print_mode2[Z3_ast_print_mode2["Z3_PRINT_SMTLIB2_COMPLIANT"] = 2] = "Z3_PRINT_SMTLIB2_COMPLIANT";
      })(Z3_ast_print_mode = exports.Z3_ast_print_mode || (exports.Z3_ast_print_mode = {}));
      var Z3_error_code2;
      (function(Z3_error_code3) {
        Z3_error_code3[Z3_error_code3["Z3_OK"] = 0] = "Z3_OK";
        Z3_error_code3[Z3_error_code3["Z3_SORT_ERROR"] = 1] = "Z3_SORT_ERROR";
        Z3_error_code3[Z3_error_code3["Z3_IOB"] = 2] = "Z3_IOB";
        Z3_error_code3[Z3_error_code3["Z3_INVALID_ARG"] = 3] = "Z3_INVALID_ARG";
        Z3_error_code3[Z3_error_code3["Z3_PARSER_ERROR"] = 4] = "Z3_PARSER_ERROR";
        Z3_error_code3[Z3_error_code3["Z3_NO_PARSER"] = 5] = "Z3_NO_PARSER";
        Z3_error_code3[Z3_error_code3["Z3_INVALID_PATTERN"] = 6] = "Z3_INVALID_PATTERN";
        Z3_error_code3[Z3_error_code3["Z3_MEMOUT_FAIL"] = 7] = "Z3_MEMOUT_FAIL";
        Z3_error_code3[Z3_error_code3["Z3_FILE_ACCESS_ERROR"] = 8] = "Z3_FILE_ACCESS_ERROR";
        Z3_error_code3[Z3_error_code3["Z3_INTERNAL_FATAL"] = 9] = "Z3_INTERNAL_FATAL";
        Z3_error_code3[Z3_error_code3["Z3_INVALID_USAGE"] = 10] = "Z3_INVALID_USAGE";
        Z3_error_code3[Z3_error_code3["Z3_DEC_REF_ERROR"] = 11] = "Z3_DEC_REF_ERROR";
        Z3_error_code3[Z3_error_code3["Z3_EXCEPTION"] = 12] = "Z3_EXCEPTION";
      })(Z3_error_code2 = exports.Z3_error_code || (exports.Z3_error_code = {}));
      var Z3_goal_prec;
      (function(Z3_goal_prec2) {
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_PRECISE"] = 0] = "Z3_GOAL_PRECISE";
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_UNDER"] = 1] = "Z3_GOAL_UNDER";
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_OVER"] = 2] = "Z3_GOAL_OVER";
        Z3_goal_prec2[Z3_goal_prec2["Z3_GOAL_UNDER_OVER"] = 3] = "Z3_GOAL_UNDER_OVER";
      })(Z3_goal_prec = exports.Z3_goal_prec || (exports.Z3_goal_prec = {}));
      async function init2(initModule) {
        let Mod = await initModule();
        function intArrayToByteArr(ints) {
          return new Uint8Array(new Uint32Array(ints).buffer);
        }
        function boolArrayToByteArr(bools) {
          return bools.map((b) => b ? 1 : 0);
        }
        function readUintArray(address, count) {
          return Array.from(new Uint32Array(Mod.HEAPU32.buffer, address, count));
        }
        let outAddress = Mod._malloc(24);
        let outUintArray = new Uint32Array(Mod.HEAPU32.buffer, outAddress, 4);
        let getOutUint = (i) => outUintArray[i];
        let outIntArray = new Int32Array(Mod.HEAPU32.buffer, outAddress, 4);
        let getOutInt = (i) => outIntArray[i];
        let outUint64Array = new BigUint64Array(Mod.HEAPU32.buffer, outAddress, 2);
        let getOutUint64 = (i) => outUint64Array[i];
        let outInt64Array = new BigInt64Array(Mod.HEAPU32.buffer, outAddress, 2);
        let getOutInt64 = (i) => outInt64Array[i];
        return {
          em: Mod,
          Z3: {
            mk_context: function(c) {
              let ctx = Mod._Z3_mk_context(c);
              Mod._set_noop_error_handler(ctx);
              return ctx;
            },
            mk_context_rc: function(c) {
              let ctx = Mod._Z3_mk_context_rc(c);
              Mod._set_noop_error_handler(ctx);
              return ctx;
            },
            global_param_set: function(param_id, param_value) {
              return Mod.ccall("Z3_global_param_set", "void", ["string", "string"], [param_id, param_value]);
            },
            global_param_reset_all: Mod._Z3_global_param_reset_all,
            global_param_get: function(param_id) {
              let ret = Mod.ccall("Z3_global_param_get", "boolean", ["string", "number"], [param_id, outAddress]);
              if (!ret) {
                return null;
              }
              return Mod.UTF8ToString(getOutUint(0));
            },
            mk_config: Mod._Z3_mk_config,
            del_config: Mod._Z3_del_config,
            set_param_value: function(c, param_id, param_value) {
              return Mod.ccall("Z3_set_param_value", "void", ["number", "string", "string"], [c, param_id, param_value]);
            },
            del_context: Mod._Z3_del_context,
            inc_ref: Mod._Z3_inc_ref,
            dec_ref: Mod._Z3_dec_ref,
            update_param_value: function(c, param_id, param_value) {
              return Mod.ccall("Z3_update_param_value", "void", ["number", "string", "string"], [c, param_id, param_value]);
            },
            interrupt: Mod._Z3_interrupt,
            mk_params: Mod._Z3_mk_params,
            params_inc_ref: Mod._Z3_params_inc_ref,
            params_dec_ref: Mod._Z3_params_dec_ref,
            params_set_bool: Mod._Z3_params_set_bool,
            params_set_uint: Mod._Z3_params_set_uint,
            params_set_double: Mod._Z3_params_set_double,
            params_set_symbol: Mod._Z3_params_set_symbol,
            params_to_string: function(c, p) {
              return Mod.ccall("Z3_params_to_string", "string", ["number", "number"], [c, p]);
            },
            params_validate: Mod._Z3_params_validate,
            param_descrs_inc_ref: Mod._Z3_param_descrs_inc_ref,
            param_descrs_dec_ref: Mod._Z3_param_descrs_dec_ref,
            param_descrs_get_kind: Mod._Z3_param_descrs_get_kind,
            param_descrs_size: Mod._Z3_param_descrs_size,
            param_descrs_get_name: Mod._Z3_param_descrs_get_name,
            param_descrs_get_documentation: function(c, p, s) {
              return Mod.ccall("Z3_param_descrs_get_documentation", "string", ["number", "number", "number"], [c, p, s]);
            },
            param_descrs_to_string: function(c, p) {
              return Mod.ccall("Z3_param_descrs_to_string", "string", ["number", "number"], [c, p]);
            },
            mk_int_symbol: Mod._Z3_mk_int_symbol,
            mk_string_symbol: function(c, s) {
              return Mod.ccall("Z3_mk_string_symbol", "number", ["number", "string"], [c, s]);
            },
            mk_uninterpreted_sort: Mod._Z3_mk_uninterpreted_sort,
            mk_bool_sort: Mod._Z3_mk_bool_sort,
            mk_int_sort: Mod._Z3_mk_int_sort,
            mk_real_sort: Mod._Z3_mk_real_sort,
            mk_bv_sort: Mod._Z3_mk_bv_sort,
            mk_finite_domain_sort: Mod._Z3_mk_finite_domain_sort,
            mk_array_sort: Mod._Z3_mk_array_sort,
            mk_array_sort_n: function(c, domain, range) {
              return Mod.ccall("Z3_mk_array_sort_n", "number", ["number", "number", "array", "number"], [
                c,
                domain.length,
                intArrayToByteArr(domain),
                range
              ]);
            },
            mk_tuple_sort: function(c, mk_tuple_name, field_names, field_sorts) {
              if (field_names.length !== field_sorts.length) {
                throw new TypeError(`field_names and field_sorts must be the same length (got ${field_names.length} and {field_sorts.length})`);
              }
              let outArray_proj_decl = Mod._malloc(4 * field_names.length);
              try {
                let ret = Mod.ccall("Z3_mk_tuple_sort", "number", [
                  "number",
                  "number",
                  "number",
                  "array",
                  "array",
                  "number",
                  "number"
                ], [
                  c,
                  mk_tuple_name,
                  field_names.length,
                  intArrayToByteArr(field_names),
                  intArrayToByteArr(field_sorts),
                  outAddress,
                  outArray_proj_decl
                ]);
                return {
                  rv: ret,
                  mk_tuple_decl: getOutUint(0),
                  proj_decl: readUintArray(outArray_proj_decl, field_names.length)
                };
              } finally {
                Mod._free(outArray_proj_decl);
              }
            },
            mk_enumeration_sort: function(c, name, enum_names) {
              let outArray_enum_consts = Mod._malloc(4 * enum_names.length);
              try {
                let outArray_enum_testers = Mod._malloc(4 * enum_names.length);
                try {
                  let ret = Mod.ccall("Z3_mk_enumeration_sort", "number", ["number", "number", "number", "array", "number", "number"], [
                    c,
                    name,
                    enum_names.length,
                    intArrayToByteArr(enum_names),
                    outArray_enum_consts,
                    outArray_enum_testers
                  ]);
                  return {
                    rv: ret,
                    enum_consts: readUintArray(outArray_enum_consts, enum_names.length),
                    enum_testers: readUintArray(outArray_enum_testers, enum_names.length)
                  };
                } finally {
                  Mod._free(outArray_enum_testers);
                }
              } finally {
                Mod._free(outArray_enum_consts);
              }
            },
            mk_list_sort: function(c, name, elem_sort) {
              let ret = Mod.ccall("Z3_mk_list_sort", "number", [
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number",
                "number"
              ], [
                c,
                name,
                elem_sort,
                outAddress,
                outAddress + 4,
                outAddress + 8,
                outAddress + 12,
                outAddress + 16,
                outAddress + 20
              ]);
              return {
                rv: ret,
                nil_decl: getOutUint(0),
                is_nil_decl: getOutUint(1),
                cons_decl: getOutUint(2),
                is_cons_decl: getOutUint(3),
                head_decl: getOutUint(4),
                tail_decl: getOutUint(5)
              };
            },
            mk_constructor: function(c, name, recognizer, field_names, sorts, sort_refs) {
              if (field_names.length !== sorts.length) {
                throw new TypeError(`field_names and sorts must be the same length (got ${field_names.length} and {sorts.length})`);
              }
              if (field_names.length !== sort_refs.length) {
                throw new TypeError(`field_names and sort_refs must be the same length (got ${field_names.length} and {sort_refs.length})`);
              }
              return Mod.ccall("Z3_mk_constructor", "number", ["number", "number", "number", "number", "array", "array", "array"], [
                c,
                name,
                recognizer,
                field_names.length,
                intArrayToByteArr(field_names),
                intArrayToByteArr(sorts),
                intArrayToByteArr(sort_refs)
              ]);
            },
            del_constructor: Mod._Z3_del_constructor,
            mk_datatype: function(c, name, constructors) {
              return Mod.ccall("Z3_mk_datatype", "number", ["number", "number", "number", "array"], [
                c,
                name,
                constructors.length,
                intArrayToByteArr(constructors)
              ]);
            },
            mk_constructor_list: function(c, constructors) {
              return Mod.ccall("Z3_mk_constructor_list", "number", ["number", "number", "array"], [
                c,
                constructors.length,
                intArrayToByteArr(constructors)
              ]);
            },
            del_constructor_list: Mod._Z3_del_constructor_list,
            mk_datatypes: function(c, sort_names, constructor_lists) {
              if (sort_names.length !== constructor_lists.length) {
                throw new TypeError(`sort_names and constructor_lists must be the same length (got ${sort_names.length} and {constructor_lists.length})`);
              }
              let outArray_sorts = Mod._malloc(4 * sort_names.length);
              try {
                let ret = Mod.ccall("Z3_mk_datatypes", "void", ["number", "number", "array", "number", "array"], [
                  c,
                  sort_names.length,
                  intArrayToByteArr(sort_names),
                  outArray_sorts,
                  intArrayToByteArr(constructor_lists)
                ]);
                return readUintArray(outArray_sorts, sort_names.length);
              } finally {
                Mod._free(outArray_sorts);
              }
            },
            query_constructor: function(c, constr, num_fields) {
              let outArray_accessors = Mod._malloc(4 * num_fields);
              try {
                let ret = Mod.ccall("Z3_query_constructor", "void", ["number", "number", "number", "number", "number", "number"], [
                  c,
                  constr,
                  num_fields,
                  outAddress,
                  outAddress + 4,
                  outArray_accessors
                ]);
                return {
                  constructor: getOutUint(0),
                  tester: getOutUint(1),
                  accessors: readUintArray(outArray_accessors, num_fields)
                };
              } finally {
                Mod._free(outArray_accessors);
              }
            },
            mk_func_decl: function(c, s, domain, range) {
              return Mod.ccall("Z3_mk_func_decl", "number", ["number", "number", "number", "array", "number"], [
                c,
                s,
                domain.length,
                intArrayToByteArr(domain),
                range
              ]);
            },
            mk_app: function(c, d, args) {
              return Mod.ccall("Z3_mk_app", "number", ["number", "number", "number", "array"], [c, d, args.length, intArrayToByteArr(args)]);
            },
            mk_const: Mod._Z3_mk_const,
            mk_fresh_func_decl: function(c, prefix, domain, range) {
              return Mod.ccall("Z3_mk_fresh_func_decl", "number", ["number", "string", "number", "array", "number"], [
                c,
                prefix,
                domain.length,
                intArrayToByteArr(domain),
                range
              ]);
            },
            mk_fresh_const: function(c, prefix, ty) {
              return Mod.ccall("Z3_mk_fresh_const", "number", ["number", "string", "number"], [c, prefix, ty]);
            },
            mk_rec_func_decl: function(c, s, domain, range) {
              return Mod.ccall("Z3_mk_rec_func_decl", "number", ["number", "number", "number", "array", "number"], [
                c,
                s,
                domain.length,
                intArrayToByteArr(domain),
                range
              ]);
            },
            add_rec_def: function(c, f, args, body) {
              return Mod.ccall("Z3_add_rec_def", "void", ["number", "number", "number", "array", "number"], [
                c,
                f,
                args.length,
                intArrayToByteArr(args),
                body
              ]);
            },
            mk_true: Mod._Z3_mk_true,
            mk_false: Mod._Z3_mk_false,
            mk_eq: Mod._Z3_mk_eq,
            mk_distinct: function(c, args) {
              return Mod.ccall("Z3_mk_distinct", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_not: Mod._Z3_mk_not,
            mk_ite: Mod._Z3_mk_ite,
            mk_iff: Mod._Z3_mk_iff,
            mk_implies: Mod._Z3_mk_implies,
            mk_xor: Mod._Z3_mk_xor,
            mk_and: function(c, args) {
              return Mod.ccall("Z3_mk_and", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_or: function(c, args) {
              return Mod.ccall("Z3_mk_or", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_add: function(c, args) {
              return Mod.ccall("Z3_mk_add", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_mul: function(c, args) {
              return Mod.ccall("Z3_mk_mul", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_sub: function(c, args) {
              return Mod.ccall("Z3_mk_sub", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_unary_minus: Mod._Z3_mk_unary_minus,
            mk_div: Mod._Z3_mk_div,
            mk_mod: Mod._Z3_mk_mod,
            mk_rem: Mod._Z3_mk_rem,
            mk_power: Mod._Z3_mk_power,
            mk_lt: Mod._Z3_mk_lt,
            mk_le: Mod._Z3_mk_le,
            mk_gt: Mod._Z3_mk_gt,
            mk_ge: Mod._Z3_mk_ge,
            mk_divides: Mod._Z3_mk_divides,
            mk_int2real: Mod._Z3_mk_int2real,
            mk_real2int: Mod._Z3_mk_real2int,
            mk_is_int: Mod._Z3_mk_is_int,
            mk_bvnot: Mod._Z3_mk_bvnot,
            mk_bvredand: Mod._Z3_mk_bvredand,
            mk_bvredor: Mod._Z3_mk_bvredor,
            mk_bvand: Mod._Z3_mk_bvand,
            mk_bvor: Mod._Z3_mk_bvor,
            mk_bvxor: Mod._Z3_mk_bvxor,
            mk_bvnand: Mod._Z3_mk_bvnand,
            mk_bvnor: Mod._Z3_mk_bvnor,
            mk_bvxnor: Mod._Z3_mk_bvxnor,
            mk_bvneg: Mod._Z3_mk_bvneg,
            mk_bvadd: Mod._Z3_mk_bvadd,
            mk_bvsub: Mod._Z3_mk_bvsub,
            mk_bvmul: Mod._Z3_mk_bvmul,
            mk_bvudiv: Mod._Z3_mk_bvudiv,
            mk_bvsdiv: Mod._Z3_mk_bvsdiv,
            mk_bvurem: Mod._Z3_mk_bvurem,
            mk_bvsrem: Mod._Z3_mk_bvsrem,
            mk_bvsmod: Mod._Z3_mk_bvsmod,
            mk_bvult: Mod._Z3_mk_bvult,
            mk_bvslt: Mod._Z3_mk_bvslt,
            mk_bvule: Mod._Z3_mk_bvule,
            mk_bvsle: Mod._Z3_mk_bvsle,
            mk_bvuge: Mod._Z3_mk_bvuge,
            mk_bvsge: Mod._Z3_mk_bvsge,
            mk_bvugt: Mod._Z3_mk_bvugt,
            mk_bvsgt: Mod._Z3_mk_bvsgt,
            mk_concat: Mod._Z3_mk_concat,
            mk_extract: Mod._Z3_mk_extract,
            mk_sign_ext: Mod._Z3_mk_sign_ext,
            mk_zero_ext: Mod._Z3_mk_zero_ext,
            mk_repeat: Mod._Z3_mk_repeat,
            mk_bit2bool: Mod._Z3_mk_bit2bool,
            mk_bvshl: Mod._Z3_mk_bvshl,
            mk_bvlshr: Mod._Z3_mk_bvlshr,
            mk_bvashr: Mod._Z3_mk_bvashr,
            mk_rotate_left: Mod._Z3_mk_rotate_left,
            mk_rotate_right: Mod._Z3_mk_rotate_right,
            mk_ext_rotate_left: Mod._Z3_mk_ext_rotate_left,
            mk_ext_rotate_right: Mod._Z3_mk_ext_rotate_right,
            mk_int2bv: Mod._Z3_mk_int2bv,
            mk_bv2int: Mod._Z3_mk_bv2int,
            mk_bvadd_no_overflow: Mod._Z3_mk_bvadd_no_overflow,
            mk_bvadd_no_underflow: Mod._Z3_mk_bvadd_no_underflow,
            mk_bvsub_no_overflow: Mod._Z3_mk_bvsub_no_overflow,
            mk_bvsub_no_underflow: Mod._Z3_mk_bvsub_no_underflow,
            mk_bvsdiv_no_overflow: Mod._Z3_mk_bvsdiv_no_overflow,
            mk_bvneg_no_overflow: Mod._Z3_mk_bvneg_no_overflow,
            mk_bvmul_no_overflow: Mod._Z3_mk_bvmul_no_overflow,
            mk_bvmul_no_underflow: Mod._Z3_mk_bvmul_no_underflow,
            mk_select: Mod._Z3_mk_select,
            mk_select_n: function(c, a, idxs) {
              return Mod.ccall("Z3_mk_select_n", "number", ["number", "number", "number", "array"], [c, a, idxs.length, intArrayToByteArr(idxs)]);
            },
            mk_store: Mod._Z3_mk_store,
            mk_store_n: function(c, a, idxs, v) {
              return Mod.ccall("Z3_mk_store_n", "number", ["number", "number", "number", "array", "number"], [c, a, idxs.length, intArrayToByteArr(idxs), v]);
            },
            mk_const_array: Mod._Z3_mk_const_array,
            mk_map: function(c, f, args) {
              return Mod.ccall("Z3_mk_map", "number", ["number", "number", "number", "array"], [c, f, args.length, intArrayToByteArr(args)]);
            },
            mk_array_default: Mod._Z3_mk_array_default,
            mk_as_array: Mod._Z3_mk_as_array,
            mk_set_has_size: Mod._Z3_mk_set_has_size,
            mk_set_sort: Mod._Z3_mk_set_sort,
            mk_empty_set: Mod._Z3_mk_empty_set,
            mk_full_set: Mod._Z3_mk_full_set,
            mk_set_add: Mod._Z3_mk_set_add,
            mk_set_del: Mod._Z3_mk_set_del,
            mk_set_union: function(c, args) {
              return Mod.ccall("Z3_mk_set_union", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_set_intersect: function(c, args) {
              return Mod.ccall("Z3_mk_set_intersect", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_set_difference: Mod._Z3_mk_set_difference,
            mk_set_complement: Mod._Z3_mk_set_complement,
            mk_set_member: Mod._Z3_mk_set_member,
            mk_set_subset: Mod._Z3_mk_set_subset,
            mk_array_ext: Mod._Z3_mk_array_ext,
            mk_numeral: function(c, numeral, ty) {
              return Mod.ccall("Z3_mk_numeral", "number", ["number", "string", "number"], [c, numeral, ty]);
            },
            mk_real: Mod._Z3_mk_real,
            mk_int: Mod._Z3_mk_int,
            mk_unsigned_int: Mod._Z3_mk_unsigned_int,
            mk_int64: Mod._Z3_mk_int64,
            mk_unsigned_int64: Mod._Z3_mk_unsigned_int64,
            mk_bv_numeral: function(c, bits) {
              return Mod.ccall("Z3_mk_bv_numeral", "number", ["number", "number", "array"], [c, bits.length, boolArrayToByteArr(bits)]);
            },
            mk_seq_sort: Mod._Z3_mk_seq_sort,
            is_seq_sort: function(c, s) {
              return Mod.ccall("Z3_is_seq_sort", "boolean", ["number", "number"], [c, s]);
            },
            get_seq_sort_basis: Mod._Z3_get_seq_sort_basis,
            mk_re_sort: Mod._Z3_mk_re_sort,
            is_re_sort: function(c, s) {
              return Mod.ccall("Z3_is_re_sort", "boolean", ["number", "number"], [c, s]);
            },
            get_re_sort_basis: Mod._Z3_get_re_sort_basis,
            mk_string_sort: Mod._Z3_mk_string_sort,
            mk_char_sort: Mod._Z3_mk_char_sort,
            is_string_sort: function(c, s) {
              return Mod.ccall("Z3_is_string_sort", "boolean", ["number", "number"], [c, s]);
            },
            is_char_sort: function(c, s) {
              return Mod.ccall("Z3_is_char_sort", "boolean", ["number", "number"], [c, s]);
            },
            mk_string: function(c, s) {
              return Mod.ccall("Z3_mk_string", "number", ["number", "string"], [c, s]);
            },
            mk_lstring: function(c, len, s) {
              return Mod.ccall("Z3_mk_lstring", "number", ["number", "number", "string"], [c, len, s]);
            },
            mk_u32string: function(c, chars) {
              return Mod.ccall("Z3_mk_u32string", "number", ["number", "number", "array"], [c, chars.length, intArrayToByteArr(chars)]);
            },
            is_string: function(c, s) {
              return Mod.ccall("Z3_is_string", "boolean", ["number", "number"], [c, s]);
            },
            get_string: function(c, s) {
              return Mod.ccall("Z3_get_string", "string", ["number", "number"], [c, s]);
            },
            get_string_length: Mod._Z3_get_string_length,
            get_string_contents: function(c, s, length) {
              let outArray_contents = Mod._malloc(4 * length);
              try {
                let ret = Mod.ccall("Z3_get_string_contents", "void", ["number", "number", "number", "number"], [c, s, length, outArray_contents]);
                return readUintArray(outArray_contents, length);
              } finally {
                Mod._free(outArray_contents);
              }
            },
            mk_seq_empty: Mod._Z3_mk_seq_empty,
            mk_seq_unit: Mod._Z3_mk_seq_unit,
            mk_seq_concat: function(c, args) {
              return Mod.ccall("Z3_mk_seq_concat", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_seq_prefix: Mod._Z3_mk_seq_prefix,
            mk_seq_suffix: Mod._Z3_mk_seq_suffix,
            mk_seq_contains: Mod._Z3_mk_seq_contains,
            mk_str_lt: Mod._Z3_mk_str_lt,
            mk_str_le: Mod._Z3_mk_str_le,
            mk_seq_extract: Mod._Z3_mk_seq_extract,
            mk_seq_replace: Mod._Z3_mk_seq_replace,
            mk_seq_at: Mod._Z3_mk_seq_at,
            mk_seq_nth: Mod._Z3_mk_seq_nth,
            mk_seq_length: Mod._Z3_mk_seq_length,
            mk_seq_index: Mod._Z3_mk_seq_index,
            mk_seq_last_index: Mod._Z3_mk_seq_last_index,
            mk_str_to_int: Mod._Z3_mk_str_to_int,
            mk_int_to_str: Mod._Z3_mk_int_to_str,
            mk_string_to_code: Mod._Z3_mk_string_to_code,
            mk_string_from_code: Mod._Z3_mk_string_from_code,
            mk_ubv_to_str: Mod._Z3_mk_ubv_to_str,
            mk_sbv_to_str: Mod._Z3_mk_sbv_to_str,
            mk_seq_to_re: Mod._Z3_mk_seq_to_re,
            mk_seq_in_re: Mod._Z3_mk_seq_in_re,
            mk_re_plus: Mod._Z3_mk_re_plus,
            mk_re_star: Mod._Z3_mk_re_star,
            mk_re_option: Mod._Z3_mk_re_option,
            mk_re_union: function(c, args) {
              return Mod.ccall("Z3_mk_re_union", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_re_concat: function(c, args) {
              return Mod.ccall("Z3_mk_re_concat", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_re_range: Mod._Z3_mk_re_range,
            mk_re_allchar: Mod._Z3_mk_re_allchar,
            mk_re_loop: Mod._Z3_mk_re_loop,
            mk_re_power: Mod._Z3_mk_re_power,
            mk_re_intersect: function(c, args) {
              return Mod.ccall("Z3_mk_re_intersect", "number", ["number", "number", "array"], [c, args.length, intArrayToByteArr(args)]);
            },
            mk_re_complement: Mod._Z3_mk_re_complement,
            mk_re_diff: Mod._Z3_mk_re_diff,
            mk_re_empty: Mod._Z3_mk_re_empty,
            mk_re_full: Mod._Z3_mk_re_full,
            mk_char: Mod._Z3_mk_char,
            mk_char_le: Mod._Z3_mk_char_le,
            mk_char_to_int: Mod._Z3_mk_char_to_int,
            mk_char_to_bv: Mod._Z3_mk_char_to_bv,
            mk_char_from_bv: Mod._Z3_mk_char_from_bv,
            mk_char_is_digit: Mod._Z3_mk_char_is_digit,
            mk_linear_order: Mod._Z3_mk_linear_order,
            mk_partial_order: Mod._Z3_mk_partial_order,
            mk_piecewise_linear_order: Mod._Z3_mk_piecewise_linear_order,
            mk_tree_order: Mod._Z3_mk_tree_order,
            mk_transitive_closure: Mod._Z3_mk_transitive_closure,
            mk_pattern: function(c, terms) {
              return Mod.ccall("Z3_mk_pattern", "number", ["number", "number", "array"], [c, terms.length, intArrayToByteArr(terms)]);
            },
            mk_bound: Mod._Z3_mk_bound,
            mk_forall: function(c, weight, patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_forall", "number", [
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                weight,
                patterns.length,
                intArrayToByteArr(patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_exists: function(c, weight, patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_exists", "number", [
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                weight,
                patterns.length,
                intArrayToByteArr(patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_quantifier: function(c, is_forall, weight, patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_quantifier", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                patterns.length,
                intArrayToByteArr(patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_quantifier_ex: function(c, is_forall, weight, quantifier_id, skolem_id, patterns, no_patterns, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_quantifier_ex", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                quantifier_id,
                skolem_id,
                patterns.length,
                intArrayToByteArr(patterns),
                no_patterns.length,
                intArrayToByteArr(no_patterns),
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_forall_const: function(c, weight, bound, patterns, body) {
              return Mod.ccall("Z3_mk_forall_const", "number", ["number", "number", "number", "array", "number", "array", "number"], [
                c,
                weight,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                body
              ]);
            },
            mk_exists_const: function(c, weight, bound, patterns, body) {
              return Mod.ccall("Z3_mk_exists_const", "number", ["number", "number", "number", "array", "number", "array", "number"], [
                c,
                weight,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                body
              ]);
            },
            mk_quantifier_const: function(c, is_forall, weight, bound, patterns, body) {
              return Mod.ccall("Z3_mk_quantifier_const", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "array",
                "number",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                body
              ]);
            },
            mk_quantifier_const_ex: function(c, is_forall, weight, quantifier_id, skolem_id, bound, patterns, no_patterns, body) {
              return Mod.ccall("Z3_mk_quantifier_const_ex", "number", [
                "number",
                "boolean",
                "number",
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "number",
                "array",
                "number"
              ], [
                c,
                is_forall,
                weight,
                quantifier_id,
                skolem_id,
                bound.length,
                intArrayToByteArr(bound),
                patterns.length,
                intArrayToByteArr(patterns),
                no_patterns.length,
                intArrayToByteArr(no_patterns),
                body
              ]);
            },
            mk_lambda: function(c, sorts, decl_names, body) {
              if (sorts.length !== decl_names.length) {
                throw new TypeError(`sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`);
              }
              return Mod.ccall("Z3_mk_lambda", "number", ["number", "number", "array", "array", "number"], [
                c,
                sorts.length,
                intArrayToByteArr(sorts),
                intArrayToByteArr(decl_names),
                body
              ]);
            },
            mk_lambda_const: function(c, bound, body) {
              return Mod.ccall("Z3_mk_lambda_const", "number", ["number", "number", "array", "number"], [
                c,
                bound.length,
                intArrayToByteArr(bound),
                body
              ]);
            },
            get_symbol_kind: Mod._Z3_get_symbol_kind,
            get_symbol_int: Mod._Z3_get_symbol_int,
            get_symbol_string: function(c, s) {
              return Mod.ccall("Z3_get_symbol_string", "string", ["number", "number"], [c, s]);
            },
            get_sort_name: Mod._Z3_get_sort_name,
            get_sort_id: Mod._Z3_get_sort_id,
            sort_to_ast: Mod._Z3_sort_to_ast,
            is_eq_sort: function(c, s1, s2) {
              return Mod.ccall("Z3_is_eq_sort", "boolean", ["number", "number", "number"], [c, s1, s2]);
            },
            get_sort_kind: Mod._Z3_get_sort_kind,
            get_bv_sort_size: Mod._Z3_get_bv_sort_size,
            get_finite_domain_sort_size: function(c, s) {
              let ret = Mod.ccall("Z3_get_finite_domain_sort_size", "boolean", ["number", "number", "number"], [c, s, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint64(0);
            },
            get_array_sort_domain: Mod._Z3_get_array_sort_domain,
            get_array_sort_domain_n: Mod._Z3_get_array_sort_domain_n,
            get_array_sort_range: Mod._Z3_get_array_sort_range,
            get_tuple_sort_mk_decl: Mod._Z3_get_tuple_sort_mk_decl,
            get_tuple_sort_num_fields: Mod._Z3_get_tuple_sort_num_fields,
            get_tuple_sort_field_decl: Mod._Z3_get_tuple_sort_field_decl,
            get_datatype_sort_num_constructors: Mod._Z3_get_datatype_sort_num_constructors,
            get_datatype_sort_constructor: Mod._Z3_get_datatype_sort_constructor,
            get_datatype_sort_recognizer: Mod._Z3_get_datatype_sort_recognizer,
            get_datatype_sort_constructor_accessor: Mod._Z3_get_datatype_sort_constructor_accessor,
            datatype_update_field: Mod._Z3_datatype_update_field,
            get_relation_arity: Mod._Z3_get_relation_arity,
            get_relation_column: Mod._Z3_get_relation_column,
            mk_atmost: function(c, args, k) {
              return Mod.ccall("Z3_mk_atmost", "number", ["number", "number", "array", "number"], [c, args.length, intArrayToByteArr(args), k]);
            },
            mk_atleast: function(c, args, k) {
              return Mod.ccall("Z3_mk_atleast", "number", ["number", "number", "array", "number"], [c, args.length, intArrayToByteArr(args), k]);
            },
            mk_pble: function(c, args, coeffs, k) {
              if (args.length !== coeffs.length) {
                throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
              }
              return Mod.ccall("Z3_mk_pble", "number", ["number", "number", "array", "array", "number"], [
                c,
                args.length,
                intArrayToByteArr(args),
                intArrayToByteArr(coeffs),
                k
              ]);
            },
            mk_pbge: function(c, args, coeffs, k) {
              if (args.length !== coeffs.length) {
                throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
              }
              return Mod.ccall("Z3_mk_pbge", "number", ["number", "number", "array", "array", "number"], [
                c,
                args.length,
                intArrayToByteArr(args),
                intArrayToByteArr(coeffs),
                k
              ]);
            },
            mk_pbeq: function(c, args, coeffs, k) {
              if (args.length !== coeffs.length) {
                throw new TypeError(`args and coeffs must be the same length (got ${args.length} and {coeffs.length})`);
              }
              return Mod.ccall("Z3_mk_pbeq", "number", ["number", "number", "array", "array", "number"], [
                c,
                args.length,
                intArrayToByteArr(args),
                intArrayToByteArr(coeffs),
                k
              ]);
            },
            func_decl_to_ast: Mod._Z3_func_decl_to_ast,
            is_eq_func_decl: function(c, f1, f2) {
              return Mod.ccall("Z3_is_eq_func_decl", "boolean", ["number", "number", "number"], [c, f1, f2]);
            },
            get_func_decl_id: Mod._Z3_get_func_decl_id,
            get_decl_name: Mod._Z3_get_decl_name,
            get_decl_kind: Mod._Z3_get_decl_kind,
            get_domain_size: Mod._Z3_get_domain_size,
            get_arity: Mod._Z3_get_arity,
            get_domain: Mod._Z3_get_domain,
            get_range: Mod._Z3_get_range,
            get_decl_num_parameters: Mod._Z3_get_decl_num_parameters,
            get_decl_parameter_kind: Mod._Z3_get_decl_parameter_kind,
            get_decl_int_parameter: Mod._Z3_get_decl_int_parameter,
            get_decl_double_parameter: Mod._Z3_get_decl_double_parameter,
            get_decl_symbol_parameter: Mod._Z3_get_decl_symbol_parameter,
            get_decl_sort_parameter: Mod._Z3_get_decl_sort_parameter,
            get_decl_ast_parameter: Mod._Z3_get_decl_ast_parameter,
            get_decl_func_decl_parameter: Mod._Z3_get_decl_func_decl_parameter,
            get_decl_rational_parameter: function(c, d, idx) {
              return Mod.ccall("Z3_get_decl_rational_parameter", "string", ["number", "number", "number"], [c, d, idx]);
            },
            app_to_ast: Mod._Z3_app_to_ast,
            get_app_decl: Mod._Z3_get_app_decl,
            get_app_num_args: Mod._Z3_get_app_num_args,
            get_app_arg: Mod._Z3_get_app_arg,
            is_eq_ast: function(c, t1, t2) {
              return Mod.ccall("Z3_is_eq_ast", "boolean", ["number", "number", "number"], [c, t1, t2]);
            },
            get_ast_id: Mod._Z3_get_ast_id,
            get_ast_hash: Mod._Z3_get_ast_hash,
            get_sort: Mod._Z3_get_sort,
            is_well_sorted: function(c, t) {
              return Mod.ccall("Z3_is_well_sorted", "boolean", ["number", "number"], [c, t]);
            },
            get_bool_value: Mod._Z3_get_bool_value,
            get_ast_kind: Mod._Z3_get_ast_kind,
            is_app: function(c, a) {
              return Mod.ccall("Z3_is_app", "boolean", ["number", "number"], [c, a]);
            },
            is_numeral_ast: function(c, a) {
              return Mod.ccall("Z3_is_numeral_ast", "boolean", ["number", "number"], [c, a]);
            },
            is_algebraic_number: function(c, a) {
              return Mod.ccall("Z3_is_algebraic_number", "boolean", ["number", "number"], [c, a]);
            },
            to_app: Mod._Z3_to_app,
            to_func_decl: Mod._Z3_to_func_decl,
            get_numeral_string: function(c, a) {
              return Mod.ccall("Z3_get_numeral_string", "string", ["number", "number"], [c, a]);
            },
            get_numeral_binary_string: function(c, a) {
              return Mod.ccall("Z3_get_numeral_binary_string", "string", ["number", "number"], [c, a]);
            },
            get_numeral_decimal_string: function(c, a, precision) {
              return Mod.ccall("Z3_get_numeral_decimal_string", "string", ["number", "number", "number"], [c, a, precision]);
            },
            get_numeral_double: Mod._Z3_get_numeral_double,
            get_numerator: Mod._Z3_get_numerator,
            get_denominator: Mod._Z3_get_denominator,
            get_numeral_small: function(c, a) {
              let ret = Mod.ccall("Z3_get_numeral_small", "boolean", ["number", "number", "number", "number"], [c, a, outAddress, outAddress + 8]);
              if (!ret) {
                return null;
              }
              return { num: getOutInt64(0), den: getOutInt64(1) };
            },
            get_numeral_int: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_int", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutInt(0);
            },
            get_numeral_uint: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_uint", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint(0);
            },
            get_numeral_uint64: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_uint64", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint64(0);
            },
            get_numeral_int64: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_int64", "boolean", ["number", "number", "number"], [c, v, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutInt64(0);
            },
            get_numeral_rational_int64: function(c, v) {
              let ret = Mod.ccall("Z3_get_numeral_rational_int64", "boolean", ["number", "number", "number", "number"], [c, v, outAddress, outAddress + 8]);
              if (!ret) {
                return null;
              }
              return { num: getOutInt64(0), den: getOutInt64(1) };
            },
            get_algebraic_number_lower: Mod._Z3_get_algebraic_number_lower,
            get_algebraic_number_upper: Mod._Z3_get_algebraic_number_upper,
            pattern_to_ast: Mod._Z3_pattern_to_ast,
            get_pattern_num_terms: Mod._Z3_get_pattern_num_terms,
            get_pattern: Mod._Z3_get_pattern,
            get_index_value: Mod._Z3_get_index_value,
            is_quantifier_forall: function(c, a) {
              return Mod.ccall("Z3_is_quantifier_forall", "boolean", ["number", "number"], [c, a]);
            },
            is_quantifier_exists: function(c, a) {
              return Mod.ccall("Z3_is_quantifier_exists", "boolean", ["number", "number"], [c, a]);
            },
            is_lambda: function(c, a) {
              return Mod.ccall("Z3_is_lambda", "boolean", ["number", "number"], [c, a]);
            },
            get_quantifier_weight: Mod._Z3_get_quantifier_weight,
            get_quantifier_num_patterns: Mod._Z3_get_quantifier_num_patterns,
            get_quantifier_pattern_ast: Mod._Z3_get_quantifier_pattern_ast,
            get_quantifier_num_no_patterns: Mod._Z3_get_quantifier_num_no_patterns,
            get_quantifier_no_pattern_ast: Mod._Z3_get_quantifier_no_pattern_ast,
            get_quantifier_num_bound: Mod._Z3_get_quantifier_num_bound,
            get_quantifier_bound_name: Mod._Z3_get_quantifier_bound_name,
            get_quantifier_bound_sort: Mod._Z3_get_quantifier_bound_sort,
            get_quantifier_body: Mod._Z3_get_quantifier_body,
            simplify: function(c, a) {
              return Mod.async_call(Mod._async_Z3_simplify, c, a);
            },
            simplify_ex: function(c, a, p) {
              return Mod.async_call(Mod._async_Z3_simplify_ex, c, a, p);
            },
            simplify_get_help: function(c) {
              return Mod.ccall("Z3_simplify_get_help", "string", ["number"], [c]);
            },
            simplify_get_param_descrs: Mod._Z3_simplify_get_param_descrs,
            update_term: function(c, a, args) {
              return Mod.ccall("Z3_update_term", "number", ["number", "number", "number", "array"], [c, a, args.length, intArrayToByteArr(args)]);
            },
            substitute: function(c, a, from, to) {
              if (from.length !== to.length) {
                throw new TypeError(`from and to must be the same length (got ${from.length} and {to.length})`);
              }
              return Mod.ccall("Z3_substitute", "number", ["number", "number", "number", "array", "array"], [
                c,
                a,
                from.length,
                intArrayToByteArr(from),
                intArrayToByteArr(to)
              ]);
            },
            substitute_vars: function(c, a, to) {
              return Mod.ccall("Z3_substitute_vars", "number", ["number", "number", "number", "array"], [c, a, to.length, intArrayToByteArr(to)]);
            },
            translate: Mod._Z3_translate,
            mk_model: Mod._Z3_mk_model,
            model_inc_ref: Mod._Z3_model_inc_ref,
            model_dec_ref: Mod._Z3_model_dec_ref,
            model_eval: function(c, m, t, model_completion) {
              let ret = Mod.ccall("Z3_model_eval", "boolean", ["number", "number", "number", "boolean", "number"], [c, m, t, model_completion, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint(0);
            },
            model_get_const_interp: function(c, m, a) {
              let ret = Mod.ccall("Z3_model_get_const_interp", "number", ["number", "number", "number"], [c, m, a]);
              if (ret === 0) {
                return null;
              }
              return ret;
            },
            model_has_interp: function(c, m, a) {
              return Mod.ccall("Z3_model_has_interp", "boolean", ["number", "number", "number"], [c, m, a]);
            },
            model_get_func_interp: function(c, m, f) {
              let ret = Mod.ccall("Z3_model_get_func_interp", "number", ["number", "number", "number"], [c, m, f]);
              if (ret === 0) {
                return null;
              }
              return ret;
            },
            model_get_num_consts: Mod._Z3_model_get_num_consts,
            model_get_const_decl: Mod._Z3_model_get_const_decl,
            model_get_num_funcs: Mod._Z3_model_get_num_funcs,
            model_get_func_decl: Mod._Z3_model_get_func_decl,
            model_get_num_sorts: Mod._Z3_model_get_num_sorts,
            model_get_sort: Mod._Z3_model_get_sort,
            model_get_sort_universe: Mod._Z3_model_get_sort_universe,
            model_translate: Mod._Z3_model_translate,
            is_as_array: function(c, a) {
              return Mod.ccall("Z3_is_as_array", "boolean", ["number", "number"], [c, a]);
            },
            get_as_array_func_decl: Mod._Z3_get_as_array_func_decl,
            add_func_interp: Mod._Z3_add_func_interp,
            add_const_interp: Mod._Z3_add_const_interp,
            func_interp_inc_ref: Mod._Z3_func_interp_inc_ref,
            func_interp_dec_ref: Mod._Z3_func_interp_dec_ref,
            func_interp_get_num_entries: Mod._Z3_func_interp_get_num_entries,
            func_interp_get_entry: Mod._Z3_func_interp_get_entry,
            func_interp_get_else: Mod._Z3_func_interp_get_else,
            func_interp_set_else: Mod._Z3_func_interp_set_else,
            func_interp_get_arity: Mod._Z3_func_interp_get_arity,
            func_interp_add_entry: Mod._Z3_func_interp_add_entry,
            func_entry_inc_ref: Mod._Z3_func_entry_inc_ref,
            func_entry_dec_ref: Mod._Z3_func_entry_dec_ref,
            func_entry_get_value: Mod._Z3_func_entry_get_value,
            func_entry_get_num_args: Mod._Z3_func_entry_get_num_args,
            func_entry_get_arg: Mod._Z3_func_entry_get_arg,
            open_log: function(filename) {
              return Mod.ccall("Z3_open_log", "boolean", ["string"], [filename]);
            },
            append_log: function(string) {
              return Mod.ccall("Z3_append_log", "void", ["string"], [string]);
            },
            close_log: Mod._Z3_close_log,
            toggle_warning_messages: Mod._Z3_toggle_warning_messages,
            set_ast_print_mode: Mod._Z3_set_ast_print_mode,
            ast_to_string: function(c, a) {
              return Mod.ccall("Z3_ast_to_string", "string", ["number", "number"], [c, a]);
            },
            pattern_to_string: function(c, p) {
              return Mod.ccall("Z3_pattern_to_string", "string", ["number", "number"], [c, p]);
            },
            sort_to_string: function(c, s) {
              return Mod.ccall("Z3_sort_to_string", "string", ["number", "number"], [c, s]);
            },
            func_decl_to_string: function(c, d) {
              return Mod.ccall("Z3_func_decl_to_string", "string", ["number", "number"], [c, d]);
            },
            model_to_string: function(c, m) {
              return Mod.ccall("Z3_model_to_string", "string", ["number", "number"], [c, m]);
            },
            benchmark_to_smtlib_string: function(c, name, logic, status, attributes, assumptions, formula) {
              return Mod.ccall("Z3_benchmark_to_smtlib_string", "string", [
                "number",
                "string",
                "string",
                "string",
                "string",
                "number",
                "array",
                "number"
              ], [
                c,
                name,
                logic,
                status,
                attributes,
                assumptions.length,
                intArrayToByteArr(assumptions),
                formula
              ]);
            },
            parse_smtlib2_string: function(c, str, sort_names, sorts, decl_names, decls) {
              if (sort_names.length !== sorts.length) {
                throw new TypeError(`sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`);
              }
              if (decl_names.length !== decls.length) {
                throw new TypeError(`decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`);
              }
              return Mod.ccall("Z3_parse_smtlib2_string", "number", [
                "number",
                "string",
                "number",
                "array",
                "array",
                "number",
                "array",
                "array"
              ], [
                c,
                str,
                sort_names.length,
                intArrayToByteArr(sort_names),
                intArrayToByteArr(sorts),
                decl_names.length,
                intArrayToByteArr(decl_names),
                intArrayToByteArr(decls)
              ]);
            },
            parse_smtlib2_file: function(c, file_name, sort_names, sorts, decl_names, decls) {
              if (sort_names.length !== sorts.length) {
                throw new TypeError(`sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`);
              }
              if (decl_names.length !== decls.length) {
                throw new TypeError(`decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`);
              }
              return Mod.ccall("Z3_parse_smtlib2_file", "number", [
                "number",
                "string",
                "number",
                "array",
                "array",
                "number",
                "array",
                "array"
              ], [
                c,
                file_name,
                sort_names.length,
                intArrayToByteArr(sort_names),
                intArrayToByteArr(sorts),
                decl_names.length,
                intArrayToByteArr(decl_names),
                intArrayToByteArr(decls)
              ]);
            },
            eval_smtlib2_string: async function(UNNAMED, str) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_eval_smtlib2_string", "string", ["number", "string"], [UNNAMED, str]));
            },
            get_error_code: Mod._Z3_get_error_code,
            set_error: Mod._Z3_set_error,
            get_error_msg: function(c, err) {
              return Mod.ccall("Z3_get_error_msg", "string", ["number", "number"], [c, err]);
            },
            get_version: function() {
              let ret = Mod.ccall("Z3_get_version", "void", ["number", "number", "number", "number"], [outAddress, outAddress + 4, outAddress + 8, outAddress + 12]);
              return {
                major: getOutUint(0),
                minor: getOutUint(1),
                build_number: getOutUint(2),
                revision_number: getOutUint(3)
              };
            },
            get_full_version: function() {
              return Mod.ccall("Z3_get_full_version", "string", [], []);
            },
            enable_trace: function(tag) {
              return Mod.ccall("Z3_enable_trace", "void", ["string"], [tag]);
            },
            disable_trace: function(tag) {
              return Mod.ccall("Z3_disable_trace", "void", ["string"], [tag]);
            },
            reset_memory: Mod._Z3_reset_memory,
            finalize_memory: Mod._Z3_finalize_memory,
            mk_goal: Mod._Z3_mk_goal,
            goal_inc_ref: Mod._Z3_goal_inc_ref,
            goal_dec_ref: Mod._Z3_goal_dec_ref,
            goal_precision: Mod._Z3_goal_precision,
            goal_assert: Mod._Z3_goal_assert,
            goal_inconsistent: function(c, g) {
              return Mod.ccall("Z3_goal_inconsistent", "boolean", ["number", "number"], [c, g]);
            },
            goal_depth: Mod._Z3_goal_depth,
            goal_reset: Mod._Z3_goal_reset,
            goal_size: Mod._Z3_goal_size,
            goal_formula: Mod._Z3_goal_formula,
            goal_num_exprs: Mod._Z3_goal_num_exprs,
            goal_is_decided_sat: function(c, g) {
              return Mod.ccall("Z3_goal_is_decided_sat", "boolean", ["number", "number"], [c, g]);
            },
            goal_is_decided_unsat: function(c, g) {
              return Mod.ccall("Z3_goal_is_decided_unsat", "boolean", ["number", "number"], [c, g]);
            },
            goal_translate: Mod._Z3_goal_translate,
            goal_convert_model: Mod._Z3_goal_convert_model,
            goal_to_string: function(c, g) {
              return Mod.ccall("Z3_goal_to_string", "string", ["number", "number"], [c, g]);
            },
            goal_to_dimacs_string: function(c, g, include_names) {
              return Mod.ccall("Z3_goal_to_dimacs_string", "string", ["number", "number", "boolean"], [c, g, include_names]);
            },
            mk_tactic: function(c, name) {
              return Mod.ccall("Z3_mk_tactic", "number", ["number", "string"], [c, name]);
            },
            tactic_inc_ref: Mod._Z3_tactic_inc_ref,
            tactic_dec_ref: Mod._Z3_tactic_dec_ref,
            mk_probe: function(c, name) {
              return Mod.ccall("Z3_mk_probe", "number", ["number", "string"], [c, name]);
            },
            probe_inc_ref: Mod._Z3_probe_inc_ref,
            probe_dec_ref: Mod._Z3_probe_dec_ref,
            tactic_and_then: Mod._Z3_tactic_and_then,
            tactic_or_else: Mod._Z3_tactic_or_else,
            tactic_par_or: function(c, ts) {
              return Mod.ccall("Z3_tactic_par_or", "number", ["number", "number", "array"], [c, ts.length, intArrayToByteArr(ts)]);
            },
            tactic_par_and_then: Mod._Z3_tactic_par_and_then,
            tactic_try_for: Mod._Z3_tactic_try_for,
            tactic_when: Mod._Z3_tactic_when,
            tactic_cond: Mod._Z3_tactic_cond,
            tactic_repeat: Mod._Z3_tactic_repeat,
            tactic_skip: Mod._Z3_tactic_skip,
            tactic_fail: Mod._Z3_tactic_fail,
            tactic_fail_if: Mod._Z3_tactic_fail_if,
            tactic_fail_if_not_decided: Mod._Z3_tactic_fail_if_not_decided,
            tactic_using_params: Mod._Z3_tactic_using_params,
            probe_const: Mod._Z3_probe_const,
            probe_lt: Mod._Z3_probe_lt,
            probe_gt: Mod._Z3_probe_gt,
            probe_le: Mod._Z3_probe_le,
            probe_ge: Mod._Z3_probe_ge,
            probe_eq: Mod._Z3_probe_eq,
            probe_and: Mod._Z3_probe_and,
            probe_or: Mod._Z3_probe_or,
            probe_not: Mod._Z3_probe_not,
            get_num_tactics: Mod._Z3_get_num_tactics,
            get_tactic_name: function(c, i) {
              return Mod.ccall("Z3_get_tactic_name", "string", ["number", "number"], [c, i]);
            },
            get_num_probes: Mod._Z3_get_num_probes,
            get_probe_name: function(c, i) {
              return Mod.ccall("Z3_get_probe_name", "string", ["number", "number"], [c, i]);
            },
            tactic_get_help: function(c, t) {
              return Mod.ccall("Z3_tactic_get_help", "string", ["number", "number"], [c, t]);
            },
            tactic_get_param_descrs: Mod._Z3_tactic_get_param_descrs,
            tactic_get_descr: function(c, name) {
              return Mod.ccall("Z3_tactic_get_descr", "string", ["number", "string"], [c, name]);
            },
            probe_get_descr: function(c, name) {
              return Mod.ccall("Z3_probe_get_descr", "string", ["number", "string"], [c, name]);
            },
            probe_apply: Mod._Z3_probe_apply,
            tactic_apply: function(c, t, g) {
              return Mod.async_call(Mod._async_Z3_tactic_apply, c, t, g);
            },
            tactic_apply_ex: function(c, t, g, p) {
              return Mod.async_call(Mod._async_Z3_tactic_apply_ex, c, t, g, p);
            },
            apply_result_inc_ref: Mod._Z3_apply_result_inc_ref,
            apply_result_dec_ref: Mod._Z3_apply_result_dec_ref,
            apply_result_to_string: function(c, r) {
              return Mod.ccall("Z3_apply_result_to_string", "string", ["number", "number"], [c, r]);
            },
            apply_result_get_num_subgoals: Mod._Z3_apply_result_get_num_subgoals,
            apply_result_get_subgoal: Mod._Z3_apply_result_get_subgoal,
            mk_solver: Mod._Z3_mk_solver,
            mk_simple_solver: Mod._Z3_mk_simple_solver,
            mk_solver_for_logic: Mod._Z3_mk_solver_for_logic,
            mk_solver_from_tactic: Mod._Z3_mk_solver_from_tactic,
            solver_translate: Mod._Z3_solver_translate,
            solver_import_model_converter: Mod._Z3_solver_import_model_converter,
            solver_get_help: function(c, s) {
              return Mod.ccall("Z3_solver_get_help", "string", ["number", "number"], [c, s]);
            },
            solver_get_param_descrs: Mod._Z3_solver_get_param_descrs,
            solver_set_params: Mod._Z3_solver_set_params,
            solver_inc_ref: Mod._Z3_solver_inc_ref,
            solver_dec_ref: Mod._Z3_solver_dec_ref,
            solver_interrupt: Mod._Z3_solver_interrupt,
            solver_push: Mod._Z3_solver_push,
            solver_pop: Mod._Z3_solver_pop,
            solver_reset: Mod._Z3_solver_reset,
            solver_get_num_scopes: Mod._Z3_solver_get_num_scopes,
            solver_assert: Mod._Z3_solver_assert,
            solver_assert_and_track: Mod._Z3_solver_assert_and_track,
            solver_from_file: function(c, s, file_name) {
              return Mod.ccall("Z3_solver_from_file", "void", ["number", "number", "string"], [c, s, file_name]);
            },
            solver_from_string: function(c, s, file_name) {
              return Mod.ccall("Z3_solver_from_string", "void", ["number", "number", "string"], [c, s, file_name]);
            },
            solver_get_assertions: Mod._Z3_solver_get_assertions,
            solver_get_units: Mod._Z3_solver_get_units,
            solver_get_trail: Mod._Z3_solver_get_trail,
            solver_get_non_units: Mod._Z3_solver_get_non_units,
            solver_get_levels: function(c, s, literals, levels) {
              return Mod.ccall("Z3_solver_get_levels", "void", ["number", "number", "number", "number", "array"], [
                c,
                s,
                literals,
                levels.length,
                intArrayToByteArr(levels)
              ]);
            },
            solver_propagate_declare: function(c, name, domain, range) {
              return Mod.ccall("Z3_solver_propagate_declare", "number", ["number", "number", "number", "array", "number"], [
                c,
                name,
                domain.length,
                intArrayToByteArr(domain),
                range
              ]);
            },
            solver_propagate_register: Mod._Z3_solver_propagate_register,
            solver_propagate_register_cb: Mod._Z3_solver_propagate_register_cb,
            solver_propagate_consequence: function(c, UNNAMED, fixed, eq_lhs, eq_rhs, conseq) {
              if (eq_lhs.length !== eq_rhs.length) {
                throw new TypeError(`eq_lhs and eq_rhs must be the same length (got ${eq_lhs.length} and {eq_rhs.length})`);
              }
              return Mod.ccall("Z3_solver_propagate_consequence", "void", [
                "number",
                "number",
                "number",
                "array",
                "number",
                "array",
                "array",
                "number"
              ], [
                c,
                UNNAMED,
                fixed.length,
                intArrayToByteArr(fixed),
                eq_lhs.length,
                intArrayToByteArr(eq_lhs),
                intArrayToByteArr(eq_rhs),
                conseq
              ]);
            },
            solver_check: function(c, s) {
              return Mod.async_call(Mod._async_Z3_solver_check, c, s);
            },
            solver_check_assumptions: async function(c, s, assumptions) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_solver_check_assumptions", "number", ["number", "number", "number", "array"], [
                c,
                s,
                assumptions.length,
                intArrayToByteArr(assumptions)
              ]));
            },
            get_implied_equalities: function(c, s, terms) {
              let outArray_class_ids = Mod._malloc(4 * terms.length);
              try {
                let ret = Mod.ccall("Z3_get_implied_equalities", "number", ["number", "number", "number", "array", "number"], [
                  c,
                  s,
                  terms.length,
                  intArrayToByteArr(terms),
                  outArray_class_ids
                ]);
                return {
                  rv: ret,
                  class_ids: readUintArray(outArray_class_ids, terms.length)
                };
              } finally {
                Mod._free(outArray_class_ids);
              }
            },
            solver_get_consequences: function(c, s, assumptions, variables, consequences) {
              return Mod.async_call(Mod._async_Z3_solver_get_consequences, c, s, assumptions, variables, consequences);
            },
            solver_cube: function(c, s, vars, backtrack_level) {
              return Mod.async_call(Mod._async_Z3_solver_cube, c, s, vars, backtrack_level);
            },
            solver_get_model: Mod._Z3_solver_get_model,
            solver_get_proof: Mod._Z3_solver_get_proof,
            solver_get_unsat_core: Mod._Z3_solver_get_unsat_core,
            solver_get_reason_unknown: function(c, s) {
              return Mod.ccall("Z3_solver_get_reason_unknown", "string", ["number", "number"], [c, s]);
            },
            solver_get_statistics: Mod._Z3_solver_get_statistics,
            solver_to_string: function(c, s) {
              return Mod.ccall("Z3_solver_to_string", "string", ["number", "number"], [c, s]);
            },
            solver_to_dimacs_string: function(c, s, include_names) {
              return Mod.ccall("Z3_solver_to_dimacs_string", "string", ["number", "number", "boolean"], [c, s, include_names]);
            },
            stats_to_string: function(c, s) {
              return Mod.ccall("Z3_stats_to_string", "string", ["number", "number"], [c, s]);
            },
            stats_inc_ref: Mod._Z3_stats_inc_ref,
            stats_dec_ref: Mod._Z3_stats_dec_ref,
            stats_size: Mod._Z3_stats_size,
            stats_get_key: function(c, s, idx) {
              return Mod.ccall("Z3_stats_get_key", "string", ["number", "number", "number"], [c, s, idx]);
            },
            stats_is_uint: function(c, s, idx) {
              return Mod.ccall("Z3_stats_is_uint", "boolean", ["number", "number", "number"], [c, s, idx]);
            },
            stats_is_double: function(c, s, idx) {
              return Mod.ccall("Z3_stats_is_double", "boolean", ["number", "number", "number"], [c, s, idx]);
            },
            stats_get_uint_value: Mod._Z3_stats_get_uint_value,
            stats_get_double_value: Mod._Z3_stats_get_double_value,
            get_estimated_alloc_size: Mod._Z3_get_estimated_alloc_size,
            algebraic_is_value: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_value", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_is_pos: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_pos", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_is_neg: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_neg", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_is_zero: function(c, a) {
              return Mod.ccall("Z3_algebraic_is_zero", "boolean", ["number", "number"], [c, a]);
            },
            algebraic_sign: Mod._Z3_algebraic_sign,
            algebraic_add: Mod._Z3_algebraic_add,
            algebraic_sub: Mod._Z3_algebraic_sub,
            algebraic_mul: Mod._Z3_algebraic_mul,
            algebraic_div: Mod._Z3_algebraic_div,
            algebraic_root: Mod._Z3_algebraic_root,
            algebraic_power: Mod._Z3_algebraic_power,
            algebraic_lt: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_lt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_gt: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_gt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_le: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_le", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_ge: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_ge", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_eq: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_eq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_neq: function(c, a, b) {
              return Mod.ccall("Z3_algebraic_neq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            algebraic_roots: async function(c, p, a) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_algebraic_roots", "number", ["number", "number", "number", "array"], [c, p, a.length, intArrayToByteArr(a)]));
            },
            algebraic_eval: async function(c, p, a) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_algebraic_eval", "number", ["number", "number", "number", "array"], [c, p, a.length, intArrayToByteArr(a)]));
            },
            algebraic_get_poly: Mod._Z3_algebraic_get_poly,
            algebraic_get_i: Mod._Z3_algebraic_get_i,
            mk_ast_vector: Mod._Z3_mk_ast_vector,
            ast_vector_inc_ref: Mod._Z3_ast_vector_inc_ref,
            ast_vector_dec_ref: Mod._Z3_ast_vector_dec_ref,
            ast_vector_size: Mod._Z3_ast_vector_size,
            ast_vector_get: Mod._Z3_ast_vector_get,
            ast_vector_set: Mod._Z3_ast_vector_set,
            ast_vector_resize: Mod._Z3_ast_vector_resize,
            ast_vector_push: Mod._Z3_ast_vector_push,
            ast_vector_translate: Mod._Z3_ast_vector_translate,
            ast_vector_to_string: function(c, v) {
              return Mod.ccall("Z3_ast_vector_to_string", "string", ["number", "number"], [c, v]);
            },
            mk_ast_map: Mod._Z3_mk_ast_map,
            ast_map_inc_ref: Mod._Z3_ast_map_inc_ref,
            ast_map_dec_ref: Mod._Z3_ast_map_dec_ref,
            ast_map_contains: function(c, m, k) {
              return Mod.ccall("Z3_ast_map_contains", "boolean", ["number", "number", "number"], [c, m, k]);
            },
            ast_map_find: Mod._Z3_ast_map_find,
            ast_map_insert: Mod._Z3_ast_map_insert,
            ast_map_erase: Mod._Z3_ast_map_erase,
            ast_map_reset: Mod._Z3_ast_map_reset,
            ast_map_size: Mod._Z3_ast_map_size,
            ast_map_keys: Mod._Z3_ast_map_keys,
            ast_map_to_string: function(c, m) {
              return Mod.ccall("Z3_ast_map_to_string", "string", ["number", "number"], [c, m]);
            },
            mk_fixedpoint: Mod._Z3_mk_fixedpoint,
            fixedpoint_inc_ref: Mod._Z3_fixedpoint_inc_ref,
            fixedpoint_dec_ref: Mod._Z3_fixedpoint_dec_ref,
            fixedpoint_add_rule: Mod._Z3_fixedpoint_add_rule,
            fixedpoint_add_fact: function(c, d, r, args) {
              return Mod.ccall("Z3_fixedpoint_add_fact", "void", ["number", "number", "number", "number", "array"], [c, d, r, args.length, intArrayToByteArr(args)]);
            },
            fixedpoint_assert: Mod._Z3_fixedpoint_assert,
            fixedpoint_query: function(c, d, query) {
              return Mod.async_call(Mod._async_Z3_fixedpoint_query, c, d, query);
            },
            fixedpoint_query_relations: async function(c, d, relations) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_fixedpoint_query_relations", "number", ["number", "number", "number", "array"], [
                c,
                d,
                relations.length,
                intArrayToByteArr(relations)
              ]));
            },
            fixedpoint_get_answer: Mod._Z3_fixedpoint_get_answer,
            fixedpoint_get_reason_unknown: function(c, d) {
              return Mod.ccall("Z3_fixedpoint_get_reason_unknown", "string", ["number", "number"], [c, d]);
            },
            fixedpoint_update_rule: Mod._Z3_fixedpoint_update_rule,
            fixedpoint_get_num_levels: Mod._Z3_fixedpoint_get_num_levels,
            fixedpoint_get_cover_delta: Mod._Z3_fixedpoint_get_cover_delta,
            fixedpoint_add_cover: Mod._Z3_fixedpoint_add_cover,
            fixedpoint_get_statistics: Mod._Z3_fixedpoint_get_statistics,
            fixedpoint_register_relation: Mod._Z3_fixedpoint_register_relation,
            fixedpoint_set_predicate_representation: function(c, d, f, relation_kinds) {
              return Mod.ccall("Z3_fixedpoint_set_predicate_representation", "void", ["number", "number", "number", "number", "array"], [
                c,
                d,
                f,
                relation_kinds.length,
                intArrayToByteArr(relation_kinds)
              ]);
            },
            fixedpoint_get_rules: Mod._Z3_fixedpoint_get_rules,
            fixedpoint_get_assertions: Mod._Z3_fixedpoint_get_assertions,
            fixedpoint_set_params: Mod._Z3_fixedpoint_set_params,
            fixedpoint_get_help: function(c, f) {
              return Mod.ccall("Z3_fixedpoint_get_help", "string", ["number", "number"], [c, f]);
            },
            fixedpoint_get_param_descrs: Mod._Z3_fixedpoint_get_param_descrs,
            fixedpoint_to_string: function(c, f, queries) {
              return Mod.ccall("Z3_fixedpoint_to_string", "string", ["number", "number", "number", "array"], [
                c,
                f,
                queries.length,
                intArrayToByteArr(queries)
              ]);
            },
            fixedpoint_from_string: function(c, f, s) {
              return Mod.ccall("Z3_fixedpoint_from_string", "number", ["number", "number", "string"], [c, f, s]);
            },
            fixedpoint_from_file: function(c, f, s) {
              return Mod.ccall("Z3_fixedpoint_from_file", "number", ["number", "number", "string"], [c, f, s]);
            },
            mk_fpa_rounding_mode_sort: Mod._Z3_mk_fpa_rounding_mode_sort,
            mk_fpa_round_nearest_ties_to_even: Mod._Z3_mk_fpa_round_nearest_ties_to_even,
            mk_fpa_rne: Mod._Z3_mk_fpa_rne,
            mk_fpa_round_nearest_ties_to_away: Mod._Z3_mk_fpa_round_nearest_ties_to_away,
            mk_fpa_rna: Mod._Z3_mk_fpa_rna,
            mk_fpa_round_toward_positive: Mod._Z3_mk_fpa_round_toward_positive,
            mk_fpa_rtp: Mod._Z3_mk_fpa_rtp,
            mk_fpa_round_toward_negative: Mod._Z3_mk_fpa_round_toward_negative,
            mk_fpa_rtn: Mod._Z3_mk_fpa_rtn,
            mk_fpa_round_toward_zero: Mod._Z3_mk_fpa_round_toward_zero,
            mk_fpa_rtz: Mod._Z3_mk_fpa_rtz,
            mk_fpa_sort: Mod._Z3_mk_fpa_sort,
            mk_fpa_sort_half: Mod._Z3_mk_fpa_sort_half,
            mk_fpa_sort_16: Mod._Z3_mk_fpa_sort_16,
            mk_fpa_sort_single: Mod._Z3_mk_fpa_sort_single,
            mk_fpa_sort_32: Mod._Z3_mk_fpa_sort_32,
            mk_fpa_sort_double: Mod._Z3_mk_fpa_sort_double,
            mk_fpa_sort_64: Mod._Z3_mk_fpa_sort_64,
            mk_fpa_sort_quadruple: Mod._Z3_mk_fpa_sort_quadruple,
            mk_fpa_sort_128: Mod._Z3_mk_fpa_sort_128,
            mk_fpa_nan: Mod._Z3_mk_fpa_nan,
            mk_fpa_inf: Mod._Z3_mk_fpa_inf,
            mk_fpa_zero: Mod._Z3_mk_fpa_zero,
            mk_fpa_fp: Mod._Z3_mk_fpa_fp,
            mk_fpa_numeral_float: Mod._Z3_mk_fpa_numeral_float,
            mk_fpa_numeral_double: Mod._Z3_mk_fpa_numeral_double,
            mk_fpa_numeral_int: Mod._Z3_mk_fpa_numeral_int,
            mk_fpa_numeral_int_uint: Mod._Z3_mk_fpa_numeral_int_uint,
            mk_fpa_numeral_int64_uint64: Mod._Z3_mk_fpa_numeral_int64_uint64,
            mk_fpa_abs: Mod._Z3_mk_fpa_abs,
            mk_fpa_neg: Mod._Z3_mk_fpa_neg,
            mk_fpa_add: Mod._Z3_mk_fpa_add,
            mk_fpa_sub: Mod._Z3_mk_fpa_sub,
            mk_fpa_mul: Mod._Z3_mk_fpa_mul,
            mk_fpa_div: Mod._Z3_mk_fpa_div,
            mk_fpa_fma: Mod._Z3_mk_fpa_fma,
            mk_fpa_sqrt: Mod._Z3_mk_fpa_sqrt,
            mk_fpa_rem: Mod._Z3_mk_fpa_rem,
            mk_fpa_round_to_integral: Mod._Z3_mk_fpa_round_to_integral,
            mk_fpa_min: Mod._Z3_mk_fpa_min,
            mk_fpa_max: Mod._Z3_mk_fpa_max,
            mk_fpa_leq: Mod._Z3_mk_fpa_leq,
            mk_fpa_lt: Mod._Z3_mk_fpa_lt,
            mk_fpa_geq: Mod._Z3_mk_fpa_geq,
            mk_fpa_gt: Mod._Z3_mk_fpa_gt,
            mk_fpa_eq: Mod._Z3_mk_fpa_eq,
            mk_fpa_is_normal: Mod._Z3_mk_fpa_is_normal,
            mk_fpa_is_subnormal: Mod._Z3_mk_fpa_is_subnormal,
            mk_fpa_is_zero: Mod._Z3_mk_fpa_is_zero,
            mk_fpa_is_infinite: Mod._Z3_mk_fpa_is_infinite,
            mk_fpa_is_nan: Mod._Z3_mk_fpa_is_nan,
            mk_fpa_is_negative: Mod._Z3_mk_fpa_is_negative,
            mk_fpa_is_positive: Mod._Z3_mk_fpa_is_positive,
            mk_fpa_to_fp_bv: Mod._Z3_mk_fpa_to_fp_bv,
            mk_fpa_to_fp_float: Mod._Z3_mk_fpa_to_fp_float,
            mk_fpa_to_fp_real: Mod._Z3_mk_fpa_to_fp_real,
            mk_fpa_to_fp_signed: Mod._Z3_mk_fpa_to_fp_signed,
            mk_fpa_to_fp_unsigned: Mod._Z3_mk_fpa_to_fp_unsigned,
            mk_fpa_to_ubv: Mod._Z3_mk_fpa_to_ubv,
            mk_fpa_to_sbv: Mod._Z3_mk_fpa_to_sbv,
            mk_fpa_to_real: Mod._Z3_mk_fpa_to_real,
            fpa_get_ebits: Mod._Z3_fpa_get_ebits,
            fpa_get_sbits: Mod._Z3_fpa_get_sbits,
            fpa_is_numeral_nan: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_nan", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_inf: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_inf", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_zero: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_zero", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_normal: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_normal", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_subnormal: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_subnormal", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_positive: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_positive", "boolean", ["number", "number"], [c, t]);
            },
            fpa_is_numeral_negative: function(c, t) {
              return Mod.ccall("Z3_fpa_is_numeral_negative", "boolean", ["number", "number"], [c, t]);
            },
            fpa_get_numeral_sign_bv: Mod._Z3_fpa_get_numeral_sign_bv,
            fpa_get_numeral_significand_bv: Mod._Z3_fpa_get_numeral_significand_bv,
            fpa_get_numeral_sign: function(c, t) {
              let ret = Mod.ccall("Z3_fpa_get_numeral_sign", "boolean", ["number", "number", "number"], [c, t, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutInt(0);
            },
            fpa_get_numeral_significand_string: function(c, t) {
              return Mod.ccall("Z3_fpa_get_numeral_significand_string", "string", ["number", "number"], [c, t]);
            },
            fpa_get_numeral_significand_uint64: function(c, t) {
              let ret = Mod.ccall("Z3_fpa_get_numeral_significand_uint64", "boolean", ["number", "number", "number"], [c, t, outAddress]);
              if (!ret) {
                return null;
              }
              return getOutUint64(0);
            },
            fpa_get_numeral_exponent_string: function(c, t, biased) {
              return Mod.ccall("Z3_fpa_get_numeral_exponent_string", "string", ["number", "number", "boolean"], [c, t, biased]);
            },
            fpa_get_numeral_exponent_int64: function(c, t, biased) {
              let ret = Mod.ccall("Z3_fpa_get_numeral_exponent_int64", "boolean", ["number", "number", "number", "boolean"], [c, t, outAddress, biased]);
              if (!ret) {
                return null;
              }
              return getOutInt64(0);
            },
            fpa_get_numeral_exponent_bv: Mod._Z3_fpa_get_numeral_exponent_bv,
            mk_fpa_to_ieee_bv: Mod._Z3_mk_fpa_to_ieee_bv,
            mk_fpa_to_fp_int_real: Mod._Z3_mk_fpa_to_fp_int_real,
            mk_optimize: Mod._Z3_mk_optimize,
            optimize_inc_ref: Mod._Z3_optimize_inc_ref,
            optimize_dec_ref: Mod._Z3_optimize_dec_ref,
            optimize_assert: Mod._Z3_optimize_assert,
            optimize_assert_and_track: Mod._Z3_optimize_assert_and_track,
            optimize_assert_soft: function(c, o, a, weight, id) {
              return Mod.ccall("Z3_optimize_assert_soft", "number", ["number", "number", "number", "string", "number"], [c, o, a, weight, id]);
            },
            optimize_maximize: Mod._Z3_optimize_maximize,
            optimize_minimize: Mod._Z3_optimize_minimize,
            optimize_push: Mod._Z3_optimize_push,
            optimize_pop: Mod._Z3_optimize_pop,
            optimize_check: async function(c, o, assumptions) {
              return await Mod.async_call(() => Mod.ccall("async_Z3_optimize_check", "number", ["number", "number", "number", "array"], [
                c,
                o,
                assumptions.length,
                intArrayToByteArr(assumptions)
              ]));
            },
            optimize_get_reason_unknown: function(c, d) {
              return Mod.ccall("Z3_optimize_get_reason_unknown", "string", ["number", "number"], [c, d]);
            },
            optimize_get_model: Mod._Z3_optimize_get_model,
            optimize_get_unsat_core: Mod._Z3_optimize_get_unsat_core,
            optimize_set_params: Mod._Z3_optimize_set_params,
            optimize_get_param_descrs: Mod._Z3_optimize_get_param_descrs,
            optimize_get_lower: Mod._Z3_optimize_get_lower,
            optimize_get_upper: Mod._Z3_optimize_get_upper,
            optimize_get_lower_as_vector: Mod._Z3_optimize_get_lower_as_vector,
            optimize_get_upper_as_vector: Mod._Z3_optimize_get_upper_as_vector,
            optimize_to_string: function(c, o) {
              return Mod.ccall("Z3_optimize_to_string", "string", ["number", "number"], [c, o]);
            },
            optimize_from_string: function(c, o, s) {
              return Mod.ccall("Z3_optimize_from_string", "void", ["number", "number", "string"], [c, o, s]);
            },
            optimize_from_file: function(c, o, s) {
              return Mod.ccall("Z3_optimize_from_file", "void", ["number", "number", "string"], [c, o, s]);
            },
            optimize_get_help: function(c, t) {
              return Mod.ccall("Z3_optimize_get_help", "string", ["number", "number"], [c, t]);
            },
            optimize_get_statistics: Mod._Z3_optimize_get_statistics,
            optimize_get_assertions: Mod._Z3_optimize_get_assertions,
            optimize_get_objectives: Mod._Z3_optimize_get_objectives,
            polynomial_subresultants: function(c, p, q, x) {
              return Mod.async_call(Mod._async_Z3_polynomial_subresultants, c, p, q, x);
            },
            rcf_del: Mod._Z3_rcf_del,
            rcf_mk_rational: function(c, val) {
              return Mod.ccall("Z3_rcf_mk_rational", "number", ["number", "string"], [c, val]);
            },
            rcf_mk_small_int: Mod._Z3_rcf_mk_small_int,
            rcf_mk_pi: Mod._Z3_rcf_mk_pi,
            rcf_mk_e: Mod._Z3_rcf_mk_e,
            rcf_mk_infinitesimal: Mod._Z3_rcf_mk_infinitesimal,
            rcf_mk_roots: function(c, a) {
              let outArray_roots = Mod._malloc(4 * a.length);
              try {
                let ret = Mod.ccall("Z3_rcf_mk_roots", "number", ["number", "number", "array", "number"], [
                  c,
                  a.length,
                  intArrayToByteArr(a),
                  outArray_roots
                ]);
                return {
                  rv: ret,
                  roots: readUintArray(outArray_roots, a.length)
                };
              } finally {
                Mod._free(outArray_roots);
              }
            },
            rcf_add: Mod._Z3_rcf_add,
            rcf_sub: Mod._Z3_rcf_sub,
            rcf_mul: Mod._Z3_rcf_mul,
            rcf_div: Mod._Z3_rcf_div,
            rcf_neg: Mod._Z3_rcf_neg,
            rcf_inv: Mod._Z3_rcf_inv,
            rcf_power: Mod._Z3_rcf_power,
            rcf_lt: function(c, a, b) {
              return Mod.ccall("Z3_rcf_lt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_gt: function(c, a, b) {
              return Mod.ccall("Z3_rcf_gt", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_le: function(c, a, b) {
              return Mod.ccall("Z3_rcf_le", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_ge: function(c, a, b) {
              return Mod.ccall("Z3_rcf_ge", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_eq: function(c, a, b) {
              return Mod.ccall("Z3_rcf_eq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_neq: function(c, a, b) {
              return Mod.ccall("Z3_rcf_neq", "boolean", ["number", "number", "number"], [c, a, b]);
            },
            rcf_num_to_string: function(c, a, compact, html) {
              return Mod.ccall("Z3_rcf_num_to_string", "string", ["number", "number", "boolean", "boolean"], [c, a, compact, html]);
            },
            rcf_num_to_decimal_string: function(c, a, prec) {
              return Mod.ccall("Z3_rcf_num_to_decimal_string", "string", ["number", "number", "number"], [c, a, prec]);
            },
            rcf_get_numerator_denominator: function(c, a) {
              let ret = Mod.ccall("Z3_rcf_get_numerator_denominator", "void", ["number", "number", "number", "number"], [c, a, outAddress, outAddress + 4]);
              return {
                n: getOutUint(0),
                d: getOutUint(1)
              };
            },
            fixedpoint_query_from_lvl: function(c, d, query, lvl) {
              return Mod.async_call(Mod._async_Z3_fixedpoint_query_from_lvl, c, d, query, lvl);
            },
            fixedpoint_get_ground_sat_answer: Mod._Z3_fixedpoint_get_ground_sat_answer,
            fixedpoint_get_rules_along_trace: Mod._Z3_fixedpoint_get_rules_along_trace,
            fixedpoint_get_rule_names_along_trace: Mod._Z3_fixedpoint_get_rule_names_along_trace,
            fixedpoint_add_invariant: Mod._Z3_fixedpoint_add_invariant,
            fixedpoint_get_reachable: Mod._Z3_fixedpoint_get_reachable,
            qe_model_project: function(c, m, bound, body) {
              return Mod.ccall("Z3_qe_model_project", "number", ["number", "number", "number", "array", "number"], [
                c,
                m,
                bound.length,
                intArrayToByteArr(bound),
                body
              ]);
            },
            qe_model_project_skolem: function(c, m, bound, body, map) {
              return Mod.ccall("Z3_qe_model_project_skolem", "number", ["number", "number", "number", "array", "number", "number"], [
                c,
                m,
                bound.length,
                intArrayToByteArr(bound),
                body,
                map
              ]);
            },
            model_extrapolate: Mod._Z3_model_extrapolate,
            qe_lite: Mod._Z3_qe_lite
          }
        };
      }
      exports.init = init2;
    }
  });

  // in.js
  var { init, Z3_error_code } = require_wrapper();
  var mod;
  async function run(str) {
    if (mod == null) {
      mod = await init(initZ3);
    }
    let { em, Z3 } = mod;
    Z3.global_param_set("verbose", "10");
    let cfg = Z3.mk_config();
    let ctx = Z3.mk_context(cfg);
    try {
      let out = await Z3.eval_smtlib2_string(ctx, str);
      if (Z3.get_error_code(ctx) !== Z3_error_code.Z3_OK) {
        throw new Error(Z3.get_error_msg(ctx, Z3.get_error_code(ctx)));
      }
      return out;
    } finally {
      Z3.del_context(ctx);
    }
  }
  window.run = run;
})();
