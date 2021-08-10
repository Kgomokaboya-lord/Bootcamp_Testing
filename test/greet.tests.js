describe('the greet function' , function(){

    it('should return "Hello, Lindani" when I greet Lindani' , function(){
        assert.equal('Hello, Lindani', greet ('Lindani'));
      
    });


    it('should return "Hello, Lihle" when I greet Lihle' , function(){
        assert.equal('Hello, Lihle', greet ('Lihle'));
      
    });

    it('should return "Hello" when no name is entered' , function(){
        assert.equal('Hello', greet());
      
    });

}); 