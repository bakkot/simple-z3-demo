'use strict';

let { init, Z3_error_code } = require('z3-solver/build/wrapper.js');

let mod;
async function run(str) {
  if (mod == null) {
    mod = await init(initZ3);
  }
  let { em, Z3 } = mod;
  Z3.global_param_set('verbose', '10');
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
};
window.run = run;

