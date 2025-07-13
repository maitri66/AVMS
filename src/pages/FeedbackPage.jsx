
    import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { motion } from 'framer-motion';
    import { Star, Upload, QrCode, MessageSquare, Send } from 'lucide-react';
    import { cn } from '@/lib/utils';

    const MAX_RATING = 5;

    const FeedbackPage = () => {
      const { toast } = useToast();
      const [visitorId, setVisitorId] = useState('');
      const [rating, setRating] = useState(0);
      const [hoverRating, setHoverRating] = useState(0);
      const [comments, setComments] = useState('');
      const [imagePreview, setImagePreview] = useState(null);
      const [imageFile, setImageFile] = useState(null);

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
          setImageFile(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setImageFile(null);
          setImagePreview(null);
          toast({
            variant: "destructive",
            title: "Invalid File Type",
            description: "Please select an image file.",
          });
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!visitorId || rating === 0 || !comments) {
           toast({
             variant: "destructive",
             title: "Incomplete Feedback",
             description: "Please provide Visitor ID, rating, and comments.",
           });
           return;
        }
        console.log('Feedback Submitted:', { visitorId, rating, comments, imageName: imageFile?.name });
        toast({
          title: "Feedback Submitted Successfully!",
          description: "Thank you for sharing your experience (mock submission).",
        });
        // Reset form
        setVisitorId('');
        setRating(0);
        setComments('');
        setImageFile(null);
        setImagePreview(null);
        // Reset file input visually
        if (document.getElementById('imageUpload')) {
            document.getElementById('imageUpload').value = '';
        }
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <Card className="max-w-2xl mx-auto shadow-lg glassmorphism">
            <CardHeader className="text-center">
              <MessageSquare className="h-10 w-10 mx-auto text-primary mb-3" />
              <CardTitle className="text-3xl font-bold text-primary">Share Your Feedback</CardTitle>
              <CardDescription>Help us improve the Yatra experience.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Visitor ID */}
                <div>
                  <Label htmlFor="visitorId" className="flex items-center mb-1"><QrCode className="mr-2 h-4 w-4 text-primary" />Visitor/QR ID</Label>
                  <Input
                    id="visitorId"
                    placeholder="Enter your registration or QR ID"
                    value={visitorId}
                    onChange={(e) => setVisitorId(e.target.value)}
                    required
                  />
                </div>

                {/* Star Rating */}
                <div className="space-y-2">
                  <Label className="flex items-center mb-1"><Star className="mr-2 h-4 w-4 text-primary" />Overall Rating</Label>
                  <div className="flex space-x-1">
                    {[...Array(MAX_RATING)].map((_, index) => {
                      const starValue = index + 1;
                      return (
                        <button
                          type="button"
                          key={starValue}
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoverRating(starValue)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none"
                          aria-label={`Rate ${starValue} out of ${MAX_RATING}`}
                        >
                          <Star
                            className={cn(
                              "h-7 w-7 cursor-pointer transition-colors duration-200",
                              starValue <= (hoverRating || rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-muted-foreground hover:text-yellow-300"
                            )}
                          />
                        </button>
                      );
                    })}
                  </div>
                   {rating === 0 && <p className="text-xs text-destructive">Please select a rating.</p>}
                </div>

                {/* Comments */}
                <div>
                  <Label htmlFor="comments" className="flex items-center mb-1"><MessageSquare className="mr-2 h-4 w-4 text-primary" />Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="Share your detailed feedback, suggestions, or issues..."
                    rows={5}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="imageUpload" className="flex items-center mb-1"><Upload className="mr-2 h-4 w-4 text-primary" />Upload Image (Optional)</Label>
                  <Input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                  />
                  {imagePreview && (
                    <div className="mt-4 p-2 border rounded-md inline-block relative glassmorphism">
                      <img 
                        src={imagePreview}
                        alt="Image preview"
                        className="max-h-32 rounded"
                       src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => { setImagePreview(null); setImageFile(null); if (document.getElementById('imageUpload')) document.getElementById('imageUpload').value = ''; }}
                        aria-label="Remove image"
                      >
                        &times;
                      </Button>
                    </div>
                  )}
                </div>

                <CardFooter className="pt-6 px-0">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="mr-2 h-4 w-4" /> Submit Feedback
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default FeedbackPage;
  